// Agora vamos fazer alguns exercícios de fixação para consolidarmos os conhecimentos adquiridos no video anterior! 😉
// Crie um objeto player contendo as variáveis listadas abaixo.
// 
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// 
// let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medelhas de prata".


let player = {
  name : 'Marta',
  lastName : 'Silva',
  age : 34,
  medals : { golden: 2, silver: 3 },
}

console.log(player.name +' '+ player['lastName'] + 'é uma jogadora de futebol de ' + player.age + ' anos.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes em '+ player.bestInTheWorld );

console.log('A jogadora possui '+ player.medals.golden +' medalhas de ouro e '+ player.medals.silver +' medalhas de prata.');
