// initialize/fetch DOM elements
const attackButton = document.getElementById('attack');
let randomGodzillaattack;
let godzillaLosesWithRock;
let gozillaLosesWithPaper;
let godzillaLosesWithScissors;


// set some initial state
let userAttack = 'rock';
let godzillaAttack = 'rock';

// define DOM utility function
//Godzilla attacks: 0-.33=rock .34-.67=paper .68-.99=scissors
//If game is tied, Godzilla attack random 
//If godzilla lost, select among other attacks
//if godzilla won, no change in godzilla attack


randomGodzillaattack = Math.random();
console.log(randomGodzillaattack);

godzillaLosesWithRock = Math.random();

gozillaLosesWithPaper = Math.random();

gozillaLosesWithScissors = Math.random();



const selectedRadioButton = document.querySelector('input:checked');
userAttack = selectedRadioButton.value;
console.log(userAttack);


// add event listeners

