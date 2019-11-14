import checkResult from './battlefunctions.js';
let result;
const attackButton = document.getElementById('attackbutton');
let godzillaAttack = 'rock';
const containerDiv = document.getElementById('container');
const userSpan = document.getElementById('playerscore');
const userScoreText = document.getElementById('userscoretext')
const userScoresSound = new Audio('assets/Powerup7.wav');
const godzillaSpan = document.getElementById('godzillascore');
const godzillaAttackSpan = document.getElementById('godzilla-text4');
const godzillaScoresSound = new Audio('assets/Explosion3.wav');
let userScore = '0';
let godzillaScore = '0';

const updateSpans = () => {
    const userScoreSanitized = (userScore * 10)
    userSpan.textContent = userScoreSanitized.toString().padEnd(3);
    const godzillaScoreSanitized = (godzillaScore * 10)
    godzillaSpan.textContent = godzillaScoreSanitized.toString().padEnd(3);
    const godzillaAttackSanitized = godzillaAttack.toUpperCase();
    godzillaAttackSpan.textContent = godzillaAttackSanitized.padEnd(8);
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

    if (result < 0) godzillaScore++, godzillaScoresSound.play() ;
    if (result > 0) userScore++, userScoresSound.play() ;
    ;

    // setTimeout(containerDiv.classList.remove('animated', 'bounce'), 1000);
    updateSpans();

    function declareWinner () {
        
        if(userScore > 9){
            userScoreText.textContent = 'YOU WIN!    '
        }
        
    };
    declareWinner();

    console.log('user attack ' + userAttack);
    console.log('godzilla attack ' + godzillaAttack);
    console.log(result);


});
