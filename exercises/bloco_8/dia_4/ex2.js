// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
// Dica: use parâmetro rest .

const assert = require('assert')

const sum = (...numbers) => numbers.reduce((acc, curr) => acc += curr, 0);

//Solução Trybe
// const sum = (...numbers) => {
//   let total = 0
//   for (number of numbers) total += number
//   return total
//  }
// escreva sum abaixo

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)