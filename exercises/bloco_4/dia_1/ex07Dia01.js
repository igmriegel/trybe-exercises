// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
    // Porcentagem >= 90 -> A
    // Porcentagem >= 80 -> B
    // Porcentagem >= 70 -> C
    // Porcentagem >= 60 -> D
    // Porcentagem >= 50 -> E
    // Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let grade = 8.5;
let gradePercentage = ((grade/10)*100);

if (gradePercentage >= 90){
  console.log('Yor grade is A');
} else if (gradePercentage >= 80){
  console.log('Yor grade is B');
} else if (gradePercentage >= 70){
  console.log('Yor grade is C');
} else if (gradePercentage >= 60){
  console.log('Yor grade is D');
} else if (gradePercentage >= 50){
  console.log('Yor grade is E');
} else {
  console.log('Yor grade is F');
};

// Gabarito Trybe
let gradeTrybe = 76;

if (gradeTrybe < 0 || gradeTrybe > 100) {
  console.log("Erro, nota incorreta!");
} else if (gradeTrybe >= 90) {
  console.log("A");
} else if (gradeTrybe >= 80) {
  console.log("B");
} else if (gradeTrybe >= 70) {
  console.log("C");
} else if (gradeTrybe >= 60) {
  console.log("D");
} else if (gradeTrybe >= 50) {
  console.log("E");
} else {
  console.log("F");
};
