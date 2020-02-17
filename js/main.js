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
console.log(number);

// Alterntiva (con virgolette): var number = "20";

document.getElementById('number').innerHTML = number;
document.getElementById('tuttoattaccato').innerHTML = name + surname + color + number;

// Data Anno Corrente
var date = new Date();
var anno = date.getFullYear();

document.getElementById('anno').innerHTML = anno;
document.getElementById('tuttoattaccato2').innerHTML = name + surname + color + anno;
