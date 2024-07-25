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

function getHumanChoice () {
    let humanInput = prompt('Enter your choice: Rock,Paper,scissors');

    while (!['rock', 'paper', 'scissors'].includes(humanInput)) {
        humanInput = prompt("Invalid choice! Please select Rock, Paper, or Scissors:");
    }

    return humanInput;
}


function playGame () {
    let humanScore = 0;
    let computerScore = 0


    for (let i = 0; i < 5; i++) {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);


        if (result.startsWith("You Win!")) {
            humanScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }

    console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();