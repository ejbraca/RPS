// Need to refactor this in some way - I don't think there should
// be any global variables :\. 


const buttons = document.querySelectorAll('button');
let buttonArray = Array.from(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.textContent,random_rps())
    });
});

let [humanScoreValue, computerScoreValue] = [0,0];

const humanScore = document.createElement('div');
const computerScore = document.createElement('div');
const winner = document.createElement('div');

const humanScoreboard = document.querySelector('#humanScoreboard');
const computerScoreboard = document.querySelector('#computerScoreboard')

humanScore.classList.add('scoreboardItem');
computerScore.classList.add('scoreboardItem');
winner.classList.add('scoreboardItem')

humanScoreboard.appendChild(humanScore);
computerScoreboard.appendChild(computerScore);



function game(humanChoice, compChoice) {

    let winner = determineWinner(humanChoice,compChoice);


    document.getElementById("humanChoice").textContent = `You chose ${ humanChoice }!`;
    document.getElementById("compChoice").textContent = `Computer chose ${ compChoice }!`;
    if (winner == "Tie") {
        winner.textContent = `Looks like a tie!`;
    } else {
        winner.textContent = `Winner is ${ winner }!`;
        incrementScore(winner);
    }
    //buttonSwitch();
}

function determineWinner(humanChoice,compChoice){
    if (humanChoice == compChoice) {
        return "Tie";
    } else if (humanChoice == "rock" && compChoice =="scissor"){
        return "Human";
    } else if (humanChoice == "scissor" && compChoice == "paper"){
        return "Human";
    } else if (humanChoice == "paper" && compChoice == "rock"){
        return "Human";
    } else {
        return "Computer";
    }
}

function incrementScore(winner) {
    if (winner == "Human") {
        humanScoreValue++;
        humanScore.textContent = `Human Score: ${ humanScoreValue }`;
        computerScore.textContent = `Computer Score: ${ computerScoreValue }`;
        document.body.style.backgroundColor = "green";
    } else {
        computerScoreValue++;
        humanScore.textContent = `Human Score: ${ humanScoreValue }`;
        computerScore.textContent = `Computer Score: ${ computerScoreValue }`;
        document.body.style.backgroundColor = "red";
    }
}

function buttonSwitch() {
    let buttonId = random_rps();
    let buttonValue = random_rps();
    document.getElementById(buttonId).textContent = buttonValue;
}

function get_choice(buttonId) {
    return document.getElementById(buttonId).textContent
}

function random_rps() {
    let val = Math.random();
    if (val < .33) {
        return "paper";
    } else if (val < .64) {
        return "rock";
    } else {
        return "scissor";
    }
}