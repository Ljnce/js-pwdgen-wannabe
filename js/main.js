// Risposte alle domande
var name = "Marco";
var surname = "Rossi";
var color = "arancione";

document.getElementById('name').innerHTML = name;
document.getElementById('name').style.fontSize = "20px";
document.getElementById('surname').innerHTML = surname;
document.getElementById('surname').style.fontSize = "20px";
document.getElementById('color').innerHTML = color;
document.getElementById('color').style.fontSize = "20px";

// Tuttoattaccato
// Utilizzando la somma e quindi levando i '' dai numeri:
var number = 10;
var number = number + 10;

// Alterntiva (con virgolette): var number = "20";

document.getElementById('tuttoattaccato').innerHTML = name + surname + color + number;
document.getElementById('tuttoattaccato').style.fontFamily = "oblique";

// Exra 1 Data Anno Corrente
var date = new Date();
var anno = date.getFullYear();

document.getElementById('tuttoattaccato2').innerHTML = name + surname + color + anno;
document.getElementById('tuttoattaccato2').style.fontFamily = "italic";

// Extra 2 Data Anno Corrente ';'
document.getElementById('tuttoattaccato3').innerHTML = name + ';' + surname + ';' + color + ';' + anno;

// Extra 3 Data Anno Corrente
var date = new Date ();
var anno2 = date.getFullYear();
var anno2 = anno2 - 2000;

document.getElementById('tuttoattaccato4').innerHTML = name + ';' + surname + ';' + color + ';' + anno2;




//Aggiunta Ora
var date = new Date();
var ore = date.getHours();
var minuti = date.getMinutes();
var secondi = date.getSeconds();

// document.getElementById('hours').innerHTML = ore;
// document.getElementById('minutes').innerHTML = minuti;
// document.getElementById('seconds').innerHTML = secondi;


document.getElementById('ora-esatta').innerHTML = ore + ':' + minuti + ':' + secondi;
