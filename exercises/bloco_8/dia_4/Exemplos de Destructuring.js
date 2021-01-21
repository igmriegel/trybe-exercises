const person = {
  name: "João",
  lastName: "Jr",
  age: 34
};

const { nationality = "Brazilian" } = person;
console.log(nationality); // Brazilian

const position2d = [1.0, 2.0];
const [x, y, z = 0] = position2d;

console.log(z); // 0


const nationality2 = ({ firstName, nationality = 'Brazilian' }) => {
  return `${firstName} is ${nationality}`;
}

// const nationality2 = ({ firstName, nationality }) => {
//   if (nationality === undefined) {
//     return `${firstName} is ${nationality = 'Brazilian'}`;
//   }
//   return `${firstName} is ${nationality}`;
// }



const person2 = {
    firstName: "João",
    lastName: "Jr II"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
};

console.log(nationality2(otherPerson)); // Ivan is Russian
console.log(nationality2(person2));

//Shor hand object property
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude
});

console.log(getPosition(-19.8157, -43.9542));

// set default values for Functions
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

const multiply = (number, value = 1) => {
  return number * value;  
};

console.log(multiply(8));
