// initialize/fetch DOM elements
const attackButton = document.getElementById('attack');

// set some initial state
let userAttack = ' ';
// define DOM utility function

const selectedRadioButton = document.querySelector('input:checked');
userAttack = selectedRadioButton.value;
console.log(userAttack);


// add event listeners

