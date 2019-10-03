export default function checkResult(userAttack, godzillaAttack){
    let winner = 0;
    console.log('winner = ' + winner);
    if (userAttack === 'rock' && godzillaAttack === 'scissors'){
        winner = 1;
    }
    console.log('we are in the checkResult');
}