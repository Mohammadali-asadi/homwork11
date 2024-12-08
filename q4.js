// ? 4. Change two or more values of this object .
// todo : one of the values that you change must be the skills property // example: ['python', 'css', 'js']

const obj2 = {
  id: 'kd455',
  age: 24,
  username: 'john2000',
  skills: ['html', 'css', 'js'],
};

//  !   Answer:
const obj1 = {
  id: 'kd455',
  age: 24,
  username: 'john2000',
  skills: ['html', 'css', 'js'],
};

// Changing the skills property and the age property
obj1.skills = ['python', 'css', 'js'];
obj1.age = 25; // Changing the age

console.log(obj1);
