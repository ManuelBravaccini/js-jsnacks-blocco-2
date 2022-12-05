/**
Calcola la somma e la media dei primi 10 numeri di un array.
**/

const array = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

let sum = 0; 

for (let i = 0; i < 10; i++) {
    sum += array[i];
}

let avg = sum / array.length;

console.log(sum, avg);