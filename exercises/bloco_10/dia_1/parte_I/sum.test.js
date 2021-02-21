// sum.test.js
const sum = require('./sum');

// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)
// Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")

describe('Test the implementation of the sum function', () => {
  it('checks if sum() returns sum of a and b', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('checks if return of sum(4, 5) is 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('checks if return of sum(0, 0) is 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('checks returns an error when one of its parameters is a string', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
})
