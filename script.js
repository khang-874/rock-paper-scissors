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

function game(){
    for(let i = 0; i < 5; ++i){
        let playerSelection = prompt("Enter your choice");
        let computerSelection = getComputerChoice();
        console.log(playGround(playerSelection, computerSelection));
    }
    
}
game();