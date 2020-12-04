// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 10;
let b = 5;
let c = 15;

console.log('O maior número é:',Math.max(a , b , c));

//Gabarito proposto Trybe:

let a = 6;
let b = 4;
let c = 2;

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
};
