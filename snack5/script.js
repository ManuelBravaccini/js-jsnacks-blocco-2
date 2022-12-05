/**
Calcola la somma, la media e il valore massimo dei primi 10 numeri di un array.
**/

const array = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 6];

let sum = 0; 

for (let i = 0; i < 10; i++) {
    sum += array[i];
}

let avg = sum / array.length;

let max = Math.max(...array);

console.log(sum, avg, max);

