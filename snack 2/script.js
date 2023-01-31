//array vuoto
const array = [];
let numero;

let sum = 0;

while (sum < 50) {
    numero = parseInt(prompt("inserisci un numero"));
    array.push(numero);
    sum = sum + numero
    console.log(array)
}