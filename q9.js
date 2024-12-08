// ? 9. Get the ‘4’ from numbers array using destructuring .
//todo : Replace the legs property in person object ,with above value(‘4’).

const numbers = ['2', '3', '4'];
const person = {
  head: {
    eyes: 'x',
    mouth: {
      teeth: 'x',
      tongue: 'x',
    },
  },
  body: {
    shoulders: 'x',
    chest: 'x',
    arms: 'x',
    hands: 'x',
    legs: 'x',
  },
};

// ! Answer
const numbers1 = ['2', '3', '4'];
const person1 = {
  head: {
    eyes: 'x',
    mouth: {
      teeth: 'x',
      tongue: 'x',
    },
  },
  body: {
    shoulders: 'x',
    chest: 'x',
    arms: 'x',
    hands: 'x',
    legs: 'x',
  },
};
const [, , legsValue] = numbers1; 
person.body.legs = legsValue;
console.log(person1);
