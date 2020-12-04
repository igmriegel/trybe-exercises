// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5
// *
// **
// ***
// ****
// *****

let number = 5;
let myPiramid = '';
let myStrg = '*';

for (let index = 0; index < number; index += 1){
  myPiramid += myStrg;
  console.log(myPiramid);
}

//gabarito
console.log('Gabarito proposto Trybe:')

let size = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};
