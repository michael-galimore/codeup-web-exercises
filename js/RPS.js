var userChoiceDisplay = document.getElementById('userChoice');
var androidChoiceDisplay = document.getElementById('androidChoice');
var resultDisplay = document.getElementById('result');
var choices = document.querySelectorAll('button')
var userChoice
var androidChoice
var results



choices.forEach(choices => choices.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateAndroidChoice()
    getResults()
    }
))
function generateAndroidChoice(){
    var randomNumber = Math.floor(Math.random() * 3) + 1

    if(randomNumber === 1){
        androidChoice = 'rock'
    }
    if(randomNumber === 2){
        androidChoice = 'paper'
    }
    if(randomNumber === 3){
        androidChoice = 'scissors'
    }
    androidChoiceDisplay.innerHTML = androidChoice
}

function getResults() {
    if (androidChoice === userChoice) {
        results = "It's a tie. The android is trying to read your hands!"
    }
    if (androidChoice === 'scissors' && userChoice === 'paper') {
        results = 'The android cut you good this time. You lost.'
    }
    if (androidChoice === 'scissors' && userChoice === 'rock') {
        results = "You broke the android's edge. You won."
    }
    if (androidChoice === 'rock' && userChoice === 'paper') {
        results = "You wrapped the android up good. You won."
    }
    if (androidChoice === 'rock' && userChoice === 'scissors') {
        results = 'Android broke your edge. You lost.'
    }
    if (androidChoice === 'paper' && userChoice === 'rock') {
        results = 'You wrapped the android up good. You won.'
    }
    if (androidChoice === 'paper' && userChoice === 'scissors') {
        results = 'You cut the android good this time. You won.'
    }
    resultDisplay.innerHTML = results
}