//valori min e max

const min = parseInt(prompt("inserisci un valore minimo"));
const max = parseInt(prompt("inserisci un valore massimo"));

if ((isNaN(min)) && (isNaN(max))) {
    alert("inserisci valori corretti")
} else {
    const casuale = Math.floor(Math.random() * max) + min;

    alert(casuale);
}


