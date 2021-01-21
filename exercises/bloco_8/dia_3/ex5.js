// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.


const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];
console.log(names[0].match(/a/gi))

// Gabarito Trybe:
// function containsA() {
//   return names.reduce((acc, curr)=> 
//      acc + curr.split('').reduce((acumulator, current) => {
//         if(current === 'a'|| current === 'A') return acumulator + 1;
//         return acumulator;
//      }, 0),0);
// }
function containsA() {
  return names.reduce((prevPerson, currPerson) => prevPerson + currPerson.match(/a/gi).length, 0);
}

assert.deepStrictEqual(containsA(), 20);