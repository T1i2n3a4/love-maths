document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let buttons of button) {
        button.addEventListener("click", function() {
            if (this.getAttibute("data-type") ==="submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttibute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


function addGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}