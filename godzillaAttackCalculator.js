export default function evaluateGodzillaStatusAndPlanAttack(result, godzillaAttack){
    const randomGodzillaattack = Math.random();
    
    if (result === 0 ){
        godzillaTies();
    }
    else if (result === 1 && godzillaAttack === 'rock'){
        godzillaLosesWithRock();
    }
    else if (result === 1 && godzillaAttack === 'paper'){
        godzillaLosesWithPaper();
    }
    else if (result === 1 && godzillaAttack === 'scissors'){
        godzillaLosesWithScissors();
    }


function godzillaTies(){
    if (randomGodzillaattack < .33){
        godzillaAttack = 'rock';
    }
    else if (randomGodzillaattack > .33 && randomGodzillaattack < .67){
        godzillaAttack = 'paper';
    }
    else if (randomGodzillaattack >= .67){
        godzillaAttack = 'scissors';
    }
}

function godzillaLosesWithRock(){
    if (randomGodzillaattack < .5){
        godzillaAttack = 'paper';
    }
    else godzillaAttack = 'scissors';
}

function godzillaLosesWithPaper(){
    if (randomGodzillaattack < .5){
        godzillaAttack = 'rock';
    }
    else godzillaAttack = 'scissors';
}

function godzillaLosesWithScissors(){
    if (randomGodzillaattack < .5){
        godzillaAttack = 'rock';
    }
    else godzillaAttack = 'paper';
}
return godzillaAttack;
};