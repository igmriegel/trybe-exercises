// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let myArray = [];

for (let index = 0; index < 25 ;index +=1){
  myArray.push(index+1);
}

console.log(myArray);

for (let index = 0; index < 25 ;index +=1){
  console.log(myArray[index]/2);
}
