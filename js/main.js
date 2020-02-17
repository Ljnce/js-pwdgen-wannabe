
// Risposte alle domande
var name = "Marco";
var surname = "Rossi";
var color = "arancione";

document.getElementById('name').innerHTML = name;
document.getElementById('surname').innerHTML = surname;
document.getElementById('color').innerHTML = color;

// Tuttoattaccato
// Utilizzando la somma e quindi levando i '' dai numeri:
var number = 10;
var number = number + 10;

// Alterntiva (con virgolette): var number = "20";

document.getElementById('tuttoattaccato').innerHTML = name + surname + color + number;

// Exra 1 Data Anno Corrente
var date = new Date();
var anno = date.getFullYear();

document.getElementById('tuttoattaccato2').innerHTML = name + surname + color + anno;

// Extra 2 Data Anno Corrente ';'
document.getElementById('tuttoattaccato3').innerHTML = name + ';' + surname + ';' + color + ';' + anno;

// Extra 3 Data Anno Corrente
var date = new Date ();
var anno2 = date.getFullYear();
var anno2 = anno2 - 2000;

document.getElementById('tuttoattaccato4').innerHTML = name + ';' + surname + ';' + color + ';' + anno2;
