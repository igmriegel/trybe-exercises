const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Calcular fatorial de n', script: './fatorial.js'},
  { name: 'Calcular n termos de Fibonacci', script: './fibonacci.js'},
];

const message = scripts.map((item, index) => `${index + 1} - ${ item.name }`).join('\n')

const selectedScript = scripts[
  readline.questionInt(
    `Qual script você deseja executar? \n${ message }
    Resposta => `) - 1
].script;

require(selectedScript);
