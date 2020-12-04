// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let number = 6;
let piramidString = '';
let fillString = '*';
let blankSpace = ' ';
let indexColum = 0;

for (let index = 0; index <= number ; index +=1 ){ 
  for (indexColum = index; indexColum < number; indexColum +=1){
    piramidString += blankSpace;
  }

  for (let indexRow = (indexColum - index); indexRow < number ; indexRow += 1){
    piramidString += fillString;
  }
  
  console.log(piramidString);
  piramidString = '';
}

//Gabarito proposto pela Trybe
console.log('Gabarito Trybe');

let n = number;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};
