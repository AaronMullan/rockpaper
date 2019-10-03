// IMPORT MODULES under test here:

import numberComparisons from '../numberComparisons.js';


const test = QUnit.test;

test('if user input is below correctNumber, return -1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 13;
    const userGuess = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberComparisons(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);

});
test('if user input is above correctNumber, return 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 13;
    const userGuess = 15;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberComparisons(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);

});
test('if user input equal to correctNumber, return 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 13;
    const userGuess = 13;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = numberComparisons(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);

});