/**
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
**/

let userNumber = parseInt(prompt("Inserisci un numero:"), 10);

if (userNumber % 2 == 0) {
    console.log("Il numero è pari.");
    console.log(userNumber);
} else {
    console.log("Il numero è dispari.");
}
