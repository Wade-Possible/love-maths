//get buttons and adding eventListeners for the game.

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function() {
           if (this.getAttribute('data-type') === 'submit') {
            checkAnswer();
           } else {
            let gameType = this.getAttribute('data-type');
            runGame(gameType);
           }
        })
    }


    runGame('addition');
});

/** The main game 'loop' called when the script is first loaded
 * and when the users answer has been processed
 */
function runGame(gameType) {
    //random numbers for the math game
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === 'multiply') {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === 'subtract') {
        displaySubtractionQuestion(num1, num2);
    }
    
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * check the answer agaist the first element in
 * the returned calculatedCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey! You got it right! :D');
        incrementScore();
    } else {
        alert(`Awww... you answerd ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}


/**
 * Get the operand (the numbers) and operator (+, -, x ect)
 * directly from the dom, and return the correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, 'addition'];
    } else if (operator === 'x') {
        return [operand1 * operand2, 'multiply'];
    } else if (operator === '-') {
        return [operand1 - operand2, 'subtract'];
    }
    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Get the scores from the dom and incroments it by 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Get the tally of incorrect answer from the dom and incroments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}
function displayMultiplyQuestion(operand1,operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}
function displayDivisionQuestion(operand1,operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}