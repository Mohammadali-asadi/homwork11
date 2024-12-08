// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const valuesArray2 = [];
for (let key in todo) {
    if (todo.hasOwnProperty(key)) { 
        valuesArray2.push(todo[key]);
    }
}
console.log(valuesArray2);

