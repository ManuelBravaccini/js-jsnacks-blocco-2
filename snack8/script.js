// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

const numList = [15, 65, 56, 656, 89, 758, 614, 58, 66, 899];

let sum = 0;

for (let i = 0; i < numList.length; i++) {
    if (i % 2 === 1) {
        sum += numList[i];
    }
}

console.log(sum);