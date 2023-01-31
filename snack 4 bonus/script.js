// dichiarazioni
let minore = parseInt(prompt("inserisci un numero"));
let maggiore = parseInt(prompt("inserisci un altro numero"));

//array
const numeri = [minore, maggiore];

//while
while (maggiore > minore) {

    minore = maggiore;

    maggiore = parseInt(prompt("inserisci un altro numero ancora"));

    numeri.push(maggiore);
}

console.log(numeri);