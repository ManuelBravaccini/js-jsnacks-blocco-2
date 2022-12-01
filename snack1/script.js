/**
Crea un array vuoto.
Chiedi per 6 volte all'utente di inserire un numero,
se è dispari inseriscilo nell'array.
**/

let array = [];

for (let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt("Inserisci un numero:"), 10);
    if (!userNumber % 2 == 0) {
        array.push(userNumber);
        console.log("Il numero è dispari.");
    } else {
        console.log("Il numero è pari.");
    }
}

console.log(array);