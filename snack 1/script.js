//valori min e max

const min = parseInt(prompt("inserisci un valore minimo"));
const max = parseInt(prompt("inserisci un valore massimo"));

if ((isNaN(min)) && (isNaN(max))) {
    alert("inserisci valori corretti")
} else {
    const casuale = Math.floor(Math.random() * (max - min + 1)) + min; //correzione: se io ho min 50 e max 100 sara da 50a 150, -min sara da 50 a 100

    alert(casuale);
}


