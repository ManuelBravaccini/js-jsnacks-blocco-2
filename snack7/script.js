/*
Generatore di persone fittizie casuali:
Il Grande Gatsby ha una lista di nomi e una lista di cognomi, da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

const names = ['Michela', 'Giuseppina', 'Taylor','Donna', 'Marsha', 'Fabio', 'Roberto'];
const lastnames = ['Cappelletti', 'Jager', 'Porcinelli' , 'Buffetti' , 'Forghieri', 'Papagni', 'Marazzini'];

const guests = [];

for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
    const randomNames = Math.floor(Math.random() * (names.length));
    const randomLastNames = Math.floor(Math.random() * (lastnames.length));
    
    const guest = names[randomNames] + " " + lastnames[randomLastNames];
    
    guests.push(guest);
}



console.log(guests);