import checkResult from './battlefunctions.js';
checkResult();
//const userGuess = document.getElementById('user-input-guess');

// initialize/fetch DOM elements
let randomGodzillaattack = Math.random();
let godzillaAttack;
evaluateGodzillaStatusAndPlanAttack();

let userScore = 0;
let godzillaScore = 0;
function godzillaTies(){
    if (randomGodzillaattack < .33){
        godzillaAttack = 'ROCK';
    }
    else if (randomGodzillaattack > .33 && randomGodzillaattack < .67){
        godzillaAttack = 'PAPER';
    }
    else if (randomGodzillaattack >= .67){
        godzillaAttack = 'SCISSORS';
    }
}

// set some initial state
// define DOM utility function
//Godzilla attack block

function evaluateGodzillaStatusAndPlanAttack(){
    //randomGodzillaattack = Math.random();


// add event listeners
attackButton.addEventListener('click', () => {
    //const userAttack = document.querySelector('input:checked').value;
    //userAttack = attackButton.querySelector('input[name="attackbutton"]:checked').value;
    const attackButton = document.getElementById('attackbutton');
    const userAttack = userAttackfromHTML.value;
    console.log ('userattackfromhtml' + userAttackfromHTML);
    evaluateGodzillaStatusAndPlanAttack();
    let winner = checkResult (userAttack, godzillaAttack);
    console.log('button clicked');
    console.log('user attack ' + userAttack);
    console.log('Godzilla attack value ' + randomGodzillaattack + godzillaAttack);
    console.log('And the winner is... ' + winner);
    if (checkResult === 1){
        userScore + 10;
    }
    if (checkResult === -1){
        godzillaScore + 10;
    };
}