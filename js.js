
/* 1) Cuenta desde el ultimo numero de un array hasta el primero
  [5,2,92,0,3,73,9,6,12] */ 

function reverse(array, i = array.length - 1){
  if (i > -1){
    console.log(array[i])
    reverse(array, i -= 1)
  }
}
reverse([5,2,92,0,3,73,9,6,12])

/* 2) Suma todos los numeros de un array e imprime cuanto es el total
  [5,2,92,0,3,73,9,6,12] */

function sum(array, i = 0, total = 0){
  if (i < array.length){
    total += array[i] 
    sum(array, i += 1, total)
    }
  else {
    console.log(`${total} es la suma total de todos los numeros`)
  }
}
sum([5,2,92,0,3,73,9,6,12])

/* 3)Realiza la sucesion de fibonacci hasta un numero N que funcione de limite */

function fibonacci(start, n, number = 1, sequence = 1){
  function normal(array, i = 0){
    if (i < array.length){
      console.log(array[i])
      normal(array, i += 1)
    }
  }
  sequence += start
  number += start
  const fibonacci_numbers = []
  while (number <= n){
    /* Para ver el proceso en tiempo real:
    console.log(`El numero de fibonacci actual es ${number}`) */
    number += sequence
    sequence = number - 1
    if (sequence == 0){
      sequence += 1
    }
    else if (sequence > 1){
      fibonacci_numbers.push(number)
      if (fibonacci_numbers.length > 1){
        sequence = fibonacci_numbers[fibonacci_numbers.length - 2]
      }
    }
  }
  fibonacci_numbers.pop();
  console.log(`La secuencia de fibonacci del ${start} al ${n} seria:`);
  normal(fibonacci_numbers);
}
fibonacci(0, 700)

/* Version 2, mejorada */

function fibonacci2(n2, f1 = 0, f2 = 1) {
  const fibonacci_numbers2 = []
  while (f1 <= n2) {
    fibonacci_numbers2.push(f1)
    let sequence2 = f1 + f2
    f1 = f2
    f2 = sequence2
  }
  return fibonacci_numbers2;
}
const numbers = fibonacci2(700);
console.log(`La secuencia de fibonacci hasta 700 sería:`);
numbers.forEach(number2 => console.log(number2));

