export default function evaluateGodzillaStatusAndPlanAttack(result, godzillaAttack){
    const randomGodzillaattack = Math.random();
    
    if (result === 0 ){
        godzillaTies();
    }
    else if (result === 1 && godzillaAttack === 'ROCK'){
        godzillaLosesWithRock();
    }
    else if (result === 1 && godzillaAttack === 'PAPER'){
        godzillaLosesWithPaper();
    }
    else if (result === 1 && godzillaAttack === 'SCISSORS'){
        godzillaLosesWithScissors();
    }


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
return godzillaAttack;
};