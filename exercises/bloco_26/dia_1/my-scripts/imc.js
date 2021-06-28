const readInput = require('readline-sync');
const heigth = readInput.questionFloat('Qual sua altura? (Responda em metros) ');
const weigth = readInput.questionFloat('Qual seu peso? (Responda em KG) ');

/**
 * | IMC                                       | Situação                  |
 * | ----------------------------------------- | ------------------------- |
 * | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
 * | Entre 18,5 e 24,9                         | Peso normal               |
 * | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
 * | Entre 30,0 e 34,9                         | Obesidade grau I          |
 * | Entre 35,0 e 39,9                         | Obesidade grau II         |
 * | 40,0 e acima                              | Obesidade graus III e IV  |
 * @param {number} heigth Altura em Metros utilizando . como separador
 * @param {number} weigth Peso em Kilos utilizando . como separador
 */
const calcIMC = (heigth, weigth) => {
  const imc = weigth / (heigth ** 2);
  let classification = ''

  if(imc <= 18.5) {
    classification += 'Abaixo do peso (magreza)';
  } else if ( imc > 18.5 && imc <= 24.9 ) {
    classification += 'Peso normal';
  } else if ( imc > 25 && imc <= 29.9 ) {
    classification += 'Acima do peso (sobrepeso)';
  } else if ( imc > 30 && imc <= 34.9 ) {
    classification += 'Obesidade grau I';
  } else if ( imc > 35 && imc <= 39.9 ) {
    classification += 'Obesidade grau II';
  } else if ( imc > 40 ) {
    classification += 'Obesidade graus III e IV';
  }

  return `Seu IMC é de ${ imc.toFixed(2) } e está classificado como ${ classification }`
}

console.log(calcIMC(heigth, weigth));
