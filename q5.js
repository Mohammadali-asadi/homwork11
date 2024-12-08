// ? 5. Modify the array of object below with (for of ) like this:
// todo : If the  gamer_id is 1002 change the gamer_name as you like

let gamers_data = [
  {
    gamer_id: 1001,
    gamer_name: 'Jason',
  },
  {
    gamer_id: 1002,
    gamer_name: 'Ali',
  },
  {
    gamer_id: 1003,
    gamer_name: 'Mathew',
  },
];

// ! Answer
let gamers_data1 = [
  {
    gamer_id: 1001,
    gamer_name: 'Jason',
  },
  {
    gamer_id: 1002,
    gamer_name: 'Ali',
  },
  {
    gamer_id: 1003,
    gamer_name: 'Mathew',
  },
];


for (let gamer of gamers_data1) {
  if (gamer.gamer_id === 1002) {
    gamer.gamer_name = 'Alex'; // New name
  }
}

console.log(gamers_data1);
