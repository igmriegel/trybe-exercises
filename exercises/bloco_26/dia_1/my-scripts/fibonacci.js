const readInput = require('readline-sync');
const n = readInput.questionInt('Insira a quantidade de elementos da sequencia de fibonacci que vc quer gerar: ');

const generateFibonacciSeq = (n) => {
  let fibArray = [1];

  for (let i = n; i > 0 ; i -= 1) {
    const lastTerm = parseInt(fibArray.slice(-1));
    const beforeLast = parseInt(fibArray.slice(-2)) || 1 ;

    fibArray.push(lastTerm + beforeLast);
  }

  console.log(...fibArray)
};

generateFibonacciSeq(n);
