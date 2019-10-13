import checkResult from './battlefunctions.js';
let result;
const attackButton = document.getElementById('attackbutton');
let godzillaAttack = 'rock';
//let userAttack = 'paper';
let userScore = 0;
let godzillaScore = 0;
function displayUserScore () => {
    document.getElementById('playerscore');
    playerscore.textContent = userScore;
    };
attackButton.addEventListener('click', () => {
    const userAttack = document.querySelector('input:checked').value;
    let randomGodzillaattack = Math.random();
    if (randomGodzillaattack < .33){
        godzillaAttack = 'rock';
    }
    else if (randomGodzillaattack > .33 && randomGodzillaattack < .67){
        godzillaAttack = 'paper';
    }
    else if (randomGodzillaattack >= .67){
        godzillaAttack = 'scissors';
    }
    result = checkResult(userAttack, godzillaAttack);
    
    console.log('user attack ' + userAttack);
    console.log('godzilla attack ' + godzillaAttack);
    console.log(result);


});
