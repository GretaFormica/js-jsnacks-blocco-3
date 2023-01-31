//dichiarazioni costanti
const N = parseInt(prompt("inserisci un numero"));

let i = 0;

while (i < N) {

    const array = [];

    let y = 0
    while (y < 10) {
        const numero = Math.floor(Math.random() * 100) + 1;
        array.push(numero);

        y++;
    }

    console.log[array];
    i++


}