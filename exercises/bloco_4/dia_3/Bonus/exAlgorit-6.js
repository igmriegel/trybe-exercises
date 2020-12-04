// 6- Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
// Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
// Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

let myNumber = 13;
let myArray = new Array(myNumber);
let divisibleFor = []

for (let index = 1; index <= myArray.length; index += 1){
  if (myNumber % index === 0){
    divisibleFor.push(index);
  } else {
    continue;
  }
}

console.log(myArray);
console.log(divisibleFor);

if (divisibleFor.length > 2){
  console.log('The number ' + myNumber + ' is not a prime number.')
} else {
  console.log('The number ' + myNumber + ' is a prime number.')
}

//Gabarito proposto pela Trybe 

let divisors;
let numberToCheck = 13;

for (let number = 2; number < numberToCheck && divisors !== 1; number += 1) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors += 1;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
