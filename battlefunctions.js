let winner = 0;

export default function checkResult(userAttack, godzillaAttack){
    
    if (userAttack === 'ROCK' && godzillaAttack === 'ROCK'){
        winner = 0;
    }
    else if (userAttack === 'ROCK' && godzillaAttack === 'PAPER'){
        winner = -1;
    }
    else if (userAttack === 'ROCK' && godzillaAttack === 'SCISSORS'){
        winner = 1;
    }
    else if (userAttack === 'PAPER' && godzillaAttack === 'ROCK'){
        winner = 1;
    }
    else if (userAttack === 'PAPER' && godzillaAttack === 'PAPER'){
        winner = 0;
    }
    else if (userAttack === 'PAPER' && godzillaAttack === 'SCISSORS'){
        winner = -1;
    }
    else if (userAttack === 'SCISSORS' && godzillaAttack === 'ROCK'){
        winner = -1;
    }
    else if (userAttack === 'SCISSORS' && godzillaAttack === 'PAPER'){
        winner = 0;
    }
    else if (userAttack === 'SCISSORS' && godzillaAttack === 'SCISSORS'){
        winner = 1;
    }
    console.log('And the winner is... ' + winner);
}