let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice(){
    return choice[Math.ceil(Math.random() * 3) - 1];
}

function playGround(playerSelection, computerSelection){
    if(playerSelection == computerSelection)
        return "Tie";
    if(playerSelection == "Rock"){
        if(computerSelection == "Paper")
            return "You lose! Paper beats Rock";
        return "You win! Rock beats scissors";
    }

    if(playerSelection == "Paper"){
        if(computerSelection == "Rock")
            return "You win! Paper beats Rock";
        return "You lose! Scissors beats Paper";
    }

    if(computerSelection == "Rock")
        return "You lose! Rock beats Scissors";
    return "You win! Scissors beats Paper";
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

let resetButton = document.createElement("div");
resetButton.setAttribute("class", "button");
resetButton.id = "reset";
resetButton.textContent = "Reset";

let announcement = document.createElement("div");
announcement.id = "announcement";

let computerChoiceDisplay = document.createElement("div");
computerChoiceDisplay.id = "computerChoiceDisplay";

function check(score, winner){
    if(score >= 5){
        for(let i = 0; i < 3; ++i){
            buttons[i].removeEventListener("click", displayResult);
        }
        
        announcement.textContent = winner + " are the winner!!";
        resetButton.addEventListener("click", reset);
        container.appendChild(announcement);
        container.removeChild(container.querySelector('#playerScoreBoard'));
        container.removeChild(container.querySelector('#computerScoreBoard'));
        container.removeChild(container.querySelector('#resultDisplay'));
        container.appendChild(resetButton);
    }
}

function reset(e){
    for(let i = 0 ; i < 3; ++i)
        buttons[i].addEventListener("click", displayResult);
    playerScore = 0;
    computerScore = 0;
    resetButton.removeEventListener("click", reset);
    container.removeChild(resetButton);
    container.removeChild(announcement);
    playerScoreBoard.textContent = "Your score: 0";
    computerScoreBoard.textContent = "Computer score: 0";
    resultDisplay.textContent = "Welcome to Rock Scissor Paper game";
    container.appendChild(resultDisplay);
    container.appendChild(playerScoreBoard);
    container.appendChild(computerScoreBoard);
}
function displayResult(e){
    let computerChoice = getComputerChoice();
    console.log(e.target.id);
    console.log(computerChoice);
    computerChoiceDisplay.textContent = computerChoice;
    result = playGround(e.target.id, computerChoice);
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

let choiceContainer = document.createElement("div");
choiceContainer.id = "choiceContainer";
for(let i = 0 ; i < 3; ++i){
    buttons.push(document.createElement("div"));
    buttons[i].id = choice[i];
    buttons[i].setAttribute("class", "button");
    buttons[i].setAttribute("value", choice[i]);
    buttons[i].textContent = choice[i];
    buttons[i].addEventListener("click", displayResult);
    choiceContainer.appendChild(buttons[i]);
}

container.appendChild(choiceContainer);
container.appendChild(computerChoiceDisplay);
container.appendChild(resultDisplay);
container.appendChild(playerScoreBoard);
container.appendChild(computerScoreBoard)