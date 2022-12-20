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
for(let i = 0 ; i < 3; ++i){
    buttons.push(document.createElement("button"));
    buttons[i].id = choice[i];
    buttons[i].setAttribute("type", "button");
    buttons[i].setAttribute("value", choice[i]);
    buttons[i].textContent = choice[i];
    buttons[i].addEventListener("click", (e) => {
        console.log(e.target.id);
    })
    container.appendChild(buttons[i]);
}