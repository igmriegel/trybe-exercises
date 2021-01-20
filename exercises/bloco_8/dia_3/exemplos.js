const numbers1 = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers1 = numbers1.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers1); // 113

// Ou seja:

const getSum = (result, number) => result + number;
const sumNumbers2 = numbers1.reduce(getSum);
console.log(sumNumbers2); // 113

const collection = [1, 2, 3, 4, 5];

const getSum2 = (accumulator, number) => {
  console.log(accumulator); // 1 3 6 10
  return accumulator + number;
};

const sumNumb3rs = collection.reduce(getSum2);
console.log(sumNumb3rs); // 15

const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum3 = (result, number) => {
  console.log(result); // 32 47 50 52 47 103
  return result + number;
};

const sumNumbers = numbers.reduce(getSum3);
console.log(sumNumbers); // 113

const numbers2 = [32, 15, 3, 2, -5, 56, 10];

const g3tSum = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const smNmbers = numbers2.reduce(g3tSum, 0); // Parâmetro adicionado ao reduce: o "0"
console.log(smNmbers); // 113

const numb3r5 = [32, 15, 3, 2, -5, 56, 10];

const g3t5um = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumb3r5 = numb3r5.reduce(g3t5um, 10);
console.log(sumNumb3r5); // 123

const nmbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = nmbers.reduce(getBigger, 100);
console.log(bigger); // 85

// A função passada agora pode possuir dois tipos de retorno:
// O retorno do próprio acumulador bigger (no caso true do ternário), o que significa que ele não será modificado; ou
// O valor do elemento do array, number , que indica que possui um valor maior que bigger .