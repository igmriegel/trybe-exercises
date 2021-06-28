const readInput = require('readline-sync');
const DISTANCIA_EM_METROS = readInput.questionInt('Qual a distancia percorrida? (Responda em metros) ') || 0;
const TEMPO_EM_SEGUNDOS = readInput.questionInt('Qual o tempo gasto? (Responda em segundos) ') || 0;

console.log(`A velocidade calculada é de ${ (DISTANCIA_EM_METROS / TEMPO_EM_SEGUNDOS).toFixed(2) } m/s`);
