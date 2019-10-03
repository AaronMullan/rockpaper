// IMPORT MODULES under test here:
import checkResult from '../battleresult.js';  

const test = QUnit.test;

test('if user selection defeats Godzilla, return 1', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAttack = 'rock';
    const godzillaAttack = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(userAttack, godzillaAttack);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});
