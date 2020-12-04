// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let number = 10000

if (number < 0){
  console.log('O numero é negativo');
} else if (number > 0){
  console.log('O numero é positivo');
} else {
  console.log('O numero é zero')
}

//Gabarito proposto Trybe

let numberX = 4;

if (numberX > 0) {
  console.log('positive');
} else if (numberX < 0) {
  console.log('negative');
} else {
  console.log('zero');
};