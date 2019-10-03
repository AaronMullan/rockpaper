import checkResult from './battlefunctions.js';
let userAttack = 'PAPER';
//document.querySelector('input[name="attackbutton"]:checked').value;
const randomGodzillaattack = Math.random();
let godzillaAttack = 'ROCK';
// initialize/fetch DOM elements
let winner = 0;
const attackButton = document.getElementById('attackbutton');
evaluateGodzillaStatusAndPlanAttack();


// set some initial state



// define DOM utility function


console.log(userAttack);

//Godzilla attack block
function evaluateGodzillaStatusAndPlanAttack(){
    if (winner === 0){
        godzillaTies();
    }
    else if (winner === 1 && godzillaAttack === 'ROCK'){
        godzillaLosesWithRock();
    }
    else if (winner === 1 && godzillaAttack === 'PAPER'){
        godzillaLosesWithPaper();
    }
    else if (winner === 1 && godzillaAttack === 'SCISSORS'){
        godzillaLosesWithScissors();
    }
}

console.log('Godzilla attack value ' + randomGodzillaattack + godzillaAttack);

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

function godzillaLosesWithRock(){
    if (randomGodzillaattack < .5){
        godzillaAttack = 'PAPER';
    }
    else godzillaAttack = 'SCISSORS';
}

function godzillaLosesWithPaper(){
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
    userAttack = document.querySelector('input:checked').value;
    evaluateGodzillaStatusAndPlanAttack();
    checkResult (userAttack, godzillaAttack);
    console.log('button clicked');
    console.log('user attack ' + userAttack);
    winner = checkResult(userAttack, godzillaAttack);
    
});