// ? 7. Using Array Destructuring, get the last name from the array.
//  todo : notice that 'Christina' is firstName , 'Jon' is middleName , 'Alexandare' is lastName.

const students = ['Christina', 'Jon', 'Alexandare'];

// ! Answer
const students1 = ['Christina', 'Jon', 'Alexandare'];

// Destructuring assignment
const [firstName, middleName, lastName] = students1;

console.log(lastName); // Alexandare
