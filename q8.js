// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :
const moreStudents1 = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

// Destructuring assignment
const [firstStudent, [secondStudent1, secondStudent2], [thirdStudent1, thirdStudent2]] = moreStudents1;

console.log(firstStudent); // Chris
console.log(secondStudent1); // Ahmad
console.log(secondStudent2); // Antigoni
console.log(thirdStudent1); // Toby
console.log(thirdStudent2); // Sam
