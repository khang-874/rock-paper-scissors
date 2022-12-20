let choice = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return choice[Math.ceil(Math.random() * 3) - 1];
}

function playGround(playerSelection1, computerSelection){
    let playerSelection = playerSelection1.toLowerCase();
    if(playerSelection == computerSelection)
        return "Tie";
    if(playerSelection == "rock"){
        if(computerSelection == "paper")
            return "You lose! Paper beats Rock";
        return "You win! Rock beats scissors";
    }
    if(playerSelection == "paper"){
        if(computerSelection == "rock")
            return "You win! Paper beats Rock";
        return "You lose! Scissors beats Paper";
    }

    if(computerSelection == "rock")
        return "You lose! Rock beats Scissors";
    return "You win! Scissors beats Paper";
}

function game(playerSelection){
    let computerSelection = getComputerChoice();
    return playGround(playerSelection, computerSelection);
}

let container = document.querySelector("#container");
let buttons = [];
let resultDisplay = document.createElement("div");
resultDisplay.textContent = "Welcome to Rock Paper Scissors game";
resultDisplay.id = "resultDisplay";

let playerScoreBoard = document.createElement("div");
let computerScoreBoard = document.createElement("div");
let playerScore = 0;
let computerScore = 0;
playerScoreBoard.textContent = `Your score: ${playerScore}`;
computerScoreBoard.textContent = `Computer score: ${computerScore}`;
playerScoreBoard.id = "playerScoreBoard";
computerScoreBoard.id = "computerScoreBoard";

function check(score, winner){
    if(score >= 5){
        for(let i = 0; i < 3; ++i){
            buttons[i].removeEventListener("click", displayResult);
        }
        let announcement = document.createElement("div");
        announcement.textContent = winner + " is the winner!!";
        announcement.id = "announcement";
        container.appendChild(announcement);
        container.removeChild(container.querySelector('#playerScoreBoard'));
        container.removeChild(container.querySelector('#computerScoreBoard'));
        container.removeChild(container.querySelector('#resultDisplay'));
    }
}

function displayResult(e){
    let result = game(e.target.id);
    resultDisplay.textContent = result;
    if(result == "Tie")
        return;
    if(result[4] == "w"){
        playerScore++;
        playerScoreBoard.textContent = `Your score: ${playerScore}`;
        check(playerScore, "You");
    }else{
        computerScore++;
        computerScoreBoard.textContent = `Computer score: ${computerScore}`;
        check(computerScore, "Computer");
    }
}

for(let i = 0 ; i < 3; ++i){
    buttons.push(document.createElement("button"));
    buttons[i].id = choice[i];
    buttons[i].setAttribute("type", "button");
    buttons[i].setAttribute("value", choice[i]);
    buttons[i].textContent = choice[i];
    buttons[i].addEventListener("click", displayResult);
    container.appendChild(buttons[i]);
}

container.appendChild(resultDisplay);
container.appendChild(playerScoreBoard);
container.appendChild(computerScoreBoard)