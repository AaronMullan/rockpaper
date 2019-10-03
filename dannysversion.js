// initialize/fetch DOM elements
const myButton = document.getElementById('my-button');
const correctSpan = document.getElementById('correct');
const totalSpan = document.getElementById('total');
const resultSpan = document.getElementById('result');
const summarySpan = document.getElementById('summary');
const resetButton = document.getElementById('reset-button');

// set some initial state
let correctGuesses = 0;
let totalGuesses = 0;

// define DOM utility function
const updateSpans = () => {
    correctSpan.textContent = correctGuesses;
    totalSpan.textContent = totalGuesses;
};

const hardReset = () => {
    correctGuesses = 0;
    totalGuesses = 0;
    summarySpan.classList.add('hidden');
    updateSpans();
};

const getCoinFlip = (oneOrZero) => {
    if (oneOrZero === 1) return 'heads';

    return 'tails';
};

const getOneOrZero = () => Math.round(Math.random());
const userDidWin = (guessedFlip, actualFlip) => {
    if (guessedFlip === actualFlip) return true;

    return false;
};

const makeGuess = () => {
    // grab values
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedSide = selectedRadioButton.value;
    // make changes to state and dom
    totalGuesses++;
    const oneOrZero = getOneOrZero();
    const randomlyFlippedSide = getCoinFlip(oneOrZero);
    const won = userDidWin(userSelectedSide, randomlyFlippedSide);

    if (won) {
        correctGuesses++;
    }

    resultSpan.textContent = randomlyFlippedSide;
    summarySpan.classList.remove('hidden');
    updateSpans();
};

// add event listeners
resetButton.addEventListener('click', hardReset);
myButton.addEventListener('click', makeGuess);