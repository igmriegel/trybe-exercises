// Montagem Basica de uma promise:
// const promise = new Promise((resolve, reject) => {

// });
// Uma promise com o Math.random:
// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`)); // apresenta erro quando é <= 5
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
// });
// Refatorando a promise acima para exibir a mensagem quando o numero for <= que 5:
// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(number);
// })
// .then(number => `Que sucesso =) nosso número foi ${number}`)
// .then(msg => console.log(msg));
// Refatorada a função para tratar o Erro:
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()* 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));
