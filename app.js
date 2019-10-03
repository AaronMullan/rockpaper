import checkResult from './battlefunctions.js';

// initialize/fetch DOM elements
winner = checkResult(userAttack,godzillaAttack)
const attackButton = document.getElementById('attackbutton');
let randomGodzillaattack;


// set some initial state
let userAttack = 'ROCK';
let godzillaAttack = 'ROCK';

// define DOM utility function
const selectedRadioButton = document.querySelector('input:checked');
userAttack = selectedRadioButton.value;
console.log(userAttack);

//Godzilla attack block
function evaluateGodzillaStatusAndPlanAttack (){
    if (winner === 0){
        godzillaAttack = godzillaTies;
    }
    if (winner === 1)


randomGodzillaattack = Math.random();
console.log(randomGodzillaattack);

function godzillaTies(){
    if (randomGodzillaattack < .33){
        godzillaAttack = 'ROCK';
    }
    if (randomGodzillaattack > .33 && randomGodzillaattack < .67){
        godzillaAttack = 'PAPER';
    }
    if (randomGodzillaattack >= .67){
        godzillaAttack = 'SCISSORS';
    }
}

function godzillaLosesWithRock(){
    if (randomGodzillaattack < .5){
        godzillaAttack = 'PAPER';
    }
    else godzillaAttack = 'SCISSORS';
}

function gozillaLosesWithPaper(){
    if (randomGodzillaattack < .5){
        godzillaAttack = 'ROCK';
    }
    else godzillaAttack = 'SCISSORS';
}

function godzillaLosesWithScissors(){
    if (randomGodzillaattack < .5){
        godzillaAttack = 'ROCK';
    }
    else godzillaAttack = 'PAPER';
}


// add event listeners
attackButton.addEventListener('click', () => {
    checkResult (userAttack, godzillaAttack);
    console.log('button clicked');
});
