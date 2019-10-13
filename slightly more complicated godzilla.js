import checkResult from './battlefunctions.js';

const attackButton = document.getElementById('attackbutton');
const rawUserattack = document.getElementById('attackers');
//const userAttack = rawUserattack.value;
let godzillaAttack = 'rock';
let randomGodzillaattack = Math.random();
function godzillattackgenerator(){
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
attackButton.addEventListener('click', () => {
    godzillattackgenerator();
    checkResult(userAttack, godzillaAttack);
    console.log(godzillaAttack);
});