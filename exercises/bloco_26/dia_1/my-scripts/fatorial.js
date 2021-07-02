const readInput = require('readline-sync');
const n = readInput.questionInt('Insira o numero que você quer fatorar: ');

/**
 * Retorna o valor de fatorial de n
 * @param {number} n - valor a ser fatorado.
 * @returns Valor de n!
 */
const calcFatorial = (n) => {
  if (n === 0) return 1;
  if (n === 1) return 1;

  return (n * calcFatorial(n-1));
}

console.log(calcFatorial(n));
