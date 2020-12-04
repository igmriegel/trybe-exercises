// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, 
// o programa deve retornar uma mensagem de erro.

let angleA = 90;
let angleB = 30;
let angelC = 60;

let sumOfAngles = angleA + angleB + angelC;

if (sumOfAngles === 180){
  console.log('This is a valid triangle.')
} else {
  console.log('ERROR!! This is an invalid triangle.')
};

//Gabarito proposto Trybe

let degreeAngleA = 65;
let degreeAngleB = 100;
let degreeAngleC = 15;

let sumOfAngles2 = degreeAngleA + degreeAngleB + degreeAngleC;

if (sumOfAngles2 === 180) {
  console.log('Ângulos válidos!');
} else {
  console.log('Ângulos inválidos!');
};
