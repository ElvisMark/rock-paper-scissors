function getComputerChoice () {
    const choice = ['rock','paper','scissors'];
    const atRandom = Math.floor(Math.random ()* choice.length)
    return choice [atRandom]
}

//console.log(getComputerChoice());

function  playRound(playerSelection,computerSelection) {
    
    const winningCondition = {
        rock : 'scissors',
        paper : 'rock',
        scissors : 'paper'
    }

        if (playerSelection === computerSelection){
            return 'Thats a draw'
        } else if (winningCondition[playerSelection] === computerSelection){
            return `You Win ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You Lose ${computerSelection} beats ${playerSelection}`
        };

}


