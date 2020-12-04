// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// Copiar
// n = 5

// *****
// *****
// *****
// *****
// *****

let number = 5;
let myBox = [];
let myStrg = '*';
let myNewBox;

for (let index = 0; index < number; index += 1){
  myBox.push(myStrg); 
}

myNewBox = myBox.toString();

for (let indx = 0; indx < number; indx += 1){
  console.log(myNewBox.replaceAll(',',''));
}

//gabarito
console.log('Gabarito proposto Trybe:')

let n = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
