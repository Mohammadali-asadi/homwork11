// * ===================================5====================================
// ********** check ***************

/*
 ? look at the code below:
 todo: 1. modify the missingLetters, put missing letters between b and f in it 
 todo: 2. modify arr, by using "spread operator" make a copy of 'missingLetters' inside arr and console.log() the arr
 todo: 3. result should be like this ["a", "b", "c", "d", "e", "f", "g"]
*/

const missingLetters = [];
const arr = ['a', 'b', 'f', 'g'];

const missingLetters1 = ['c', 'd', 'e']; 
const arr2 = ['a', 'b', ...missingLetters1, 'f', 'g'];
console.log(arr2);
