import checkResult from './battlefunctions.js';
import evaluateGodzillaStatusAndPlanAttack from './godzillaAttackCalculator.js';

let result = 0;
let godzillaAttack = 'rock';
let userScore = '0';
let godzillaScore = '0';

const attackButton = document.getElementById('attackbutton');
const attackSelect = document.getElementsByName('attackers');
console.log(attackSelect);
const userSpan = document.getElementById('playerscore');
const userScoreText = document.getElementById('userscoretext');
const godzillaScoreText = document.getElementById('godzillascoretext');
const godzillaSpan = document.getElementById('godzillascore');
const godzillaAttackSpan = document.getElementById('godzilla-text4');

const pageLoadSound = new Audio('assets/pageload.wav');
const selectAttackSound = new Audio('assets/selectattack.wav');
const userScoresSound = new Audio('assets/userscores.wav');
const godzillaScoresSound = new Audio('assets/godzillascores.wav');
const tieScoreSound = new Audio('assets/tie.wav');
const userWinsSound = new Audio('assets/userwins.wav');
const godzillaWinsSound = new Audio('assets/godzillawins.wav');

pageLoadSound.play();

for (let i=0, len=attackSelect.length; i<len; i++) {
    attackSelect[i].onclick = function() {
        selectAttackSound.play();
    };
}

const updateSpans = () => {
    const userScoreSanitized = (userScore * 10);
    userSpan.textContent = userScoreSanitized.toString().padEnd(3);
    const godzillaScoreSanitized = (godzillaScore * 10);
    godzillaSpan.textContent = godzillaScoreSanitized.toString().padEnd(3);
    const godzillaAttackSanitized = godzillaAttack.toUpperCase();
    godzillaAttackSpan.textContent = godzillaAttackSanitized.padEnd(8);
    if (godzillaScore > 9 || userScore > 9){
        attackButton.textContent = 'TRY AGAIN';
    }
};

attackButton.addEventListener('click', () => {
    if (godzillaScore > 9 || userScore > 9) {window.location.reload();} 
    const userAttack = document.querySelector('input:checked').value;
    result = checkResult(userAttack, godzillaAttack);

    if (result < 0) godzillaScore++, godzillaScoresSound.play() ;
    if (result > 0) userScore++, userScoresSound.play() ;
    if (result === 0) tieScoreSound.play() ;
    
    updateSpans();

    function declareWinner(){
        
        if (userScore > 9){
            userScoreText.textContent = 'YOU WIN!      ',
            userWinsSound.play() ;
        }
        if (godzillaScore > 9){
            godzillaScoreText.textContent = 'GODZILLA WINS   ',
            godzillaWinsSound.play() ;
        }     
    }
    declareWinner();

    console.log('user attack ' + userAttack);
    console.log('godzilla attack ' + godzillaAttack);
    console.log(result);
    godzillaAttack = evaluateGodzillaStatusAndPlanAttack(result, godzillaAttack);
});