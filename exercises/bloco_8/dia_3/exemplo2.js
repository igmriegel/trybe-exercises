// Solução usando filter e reduce :
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const sumPair1 = (currentValue, number) => currentValue + number;

const sumNumbers1 = (array) => array.filter(getEven).reduce(sumPair1); // Olhe que código pequeno e conciso!

console.log(sumNumbers1(numbers)); // 152
// Solução usando apenas reduce :

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers = (array) => array.reduce(sumPair, 0);

console.log(sumNumbers(numbers)); // 152

