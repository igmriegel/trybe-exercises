// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//   -Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
//    sem aumentar a quantidade de condicionais.
//   -Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//   -Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//   -Exemplo: bishop -> diagonals


//Gabarito Trybe
let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal e horizontal.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};
