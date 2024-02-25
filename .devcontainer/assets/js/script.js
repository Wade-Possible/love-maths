//get buttons and adding eventListeners for the game.

document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        //Try 'this instead of button!!!!
        button.addEventListener('click', function() {
           if (this.getAttribute('data-type') === 'submit') {
               alert('You clicked submit') 
           } else {
            let gameType = this.getAttribute('data-type');
            alert(`You clicked ${gameType}`)
           }
        })
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {}
function displaySubtractionQuestion() {}
function displayMultiplyQuestion() {}
function displayDivisionQuestion() {}