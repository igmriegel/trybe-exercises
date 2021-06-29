const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

const message = scripts.map((item, index) => `${index + 1} - ${ item.name }`).join('\n')

const selectedScript = scripts[
  readline.questionInt(
    `Qual script você deseja executar? \n${ message }
    Resposta => `) - 1
].script;

require(selectedScript);
