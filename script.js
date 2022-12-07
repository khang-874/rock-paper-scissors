function getComputerChoice(){
    return Math.ceil(Math.random() * 3);
}

for(let i = 0; i < 3; ++i)
    console.log(getComputerChoice());