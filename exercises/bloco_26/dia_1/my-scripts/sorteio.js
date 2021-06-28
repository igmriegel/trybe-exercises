const readInput = require('readline-sync');
const GUESS_NUM = readInput.questionInt('Adivinhe um numero inteiro de 0 a 10: ');

/**
 * Função que faz a comparação entre a adivinhação de um numero que é inputado
 * pelo usuario e sorteia um numero aleatório entre os parametros min e max e
 * retorna se o palpite está correto ou errado.
 * @param {number} min Seta o numero minimo do intervaloa aleatório
 * @param {number} max Seta o numero maximo do intervaloa aleatório
 * @param {number} guess Palpite do usuario
 * @returns Uma string com a classificação do palpite
 */
const rodarSorteio = (min, max, guess) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor( Math.random() * (max - min)) + min;
  // implementação cfe "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random"
  const guessClassification = guess == randomNum ? 'correto' : 'errado'

  if ( guess > max ) {
    return `O numero que você escolheu (${guess}) está fora do intervalo do sorteio que é entre ${min} e ${max}`
  }

  return `O numero sorteado é ${ randomNum }. Seu palpite está ${ guessClassification }.`
}

console.log(rodarSorteio(0, 10, GUESS_NUM));
