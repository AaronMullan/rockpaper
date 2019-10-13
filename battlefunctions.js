function checkResult(userAttack, godzillaAttack){
    if (userAttack === 'rock' && godzillaAttack === 'rock'){
        return 0;
    }
    else if (userAttack === 'rock' && godzillaAttack === 'paper'){
        return -1;
    }
    else if (userAttack === 'rock' && godzillaAttack === 'scissors'){
        return 1;
    }
    else if (userAttack === 'paper' && godzillaAttack === 'rock'){
        return 1;
    }
    else if (userAttack === 'paper' && godzillaAttack === 'paper'){
        return 0;
    }
    else if (userAttack === 'paper' && godzillaAttack === 'scissors'){
        return -1;
    }
    else if (userAttack === 'scissors' && godzillaAttack === 'rock'){
        return -1;
    }
    else if (userAttack === 'scissors' && godzillaAttack === 'paper'){
        return 1;
    }
    else if (userAttack === 'scissors' && godzillaAttack === 'scissors'){
        return 0;
    }}

export default checkResult;