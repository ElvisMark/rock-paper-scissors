let humanScore = 0;
let computerScore = 0;


function getComputerChoice () {
    const choice = ['rock','paper','scissors'];
    const choiceRandom = Math.floor(Math.random() * choice.length);
    return choice [choiceRandom];
}

function  playRound (humanSelection,computerSelection) {
    
    humanSelection = humanSelection.toLowerCase();

    const winningCondition = {
        rock : 'scissors',
        paper : 'rock',
        scissors : 'paper'
    }

        if (humanSelection === computerSelection.toLowerCase()){
            return "It's a tie!"
        } else if (winningCondition[humanSelection] === computerSelection.toLowerCase()){
            return `You Win! ${humanSelection} beats ${computerSelection}`;
        } else {
            return `You Lose! ${computerSelection} beats ${humanSelection}`
        };

}

const resultDisplay = document.querySelector('#result')
const playerScoreSpan = document.querySelector('#playerScore')
const computerScoreSpan = document.querySelector('#computerScore')
const resetButton = document.querySelector('#reset');


function updateScores(result) {
    if (result.startsWith("You Win!")) {
        humanScore++;
    } else if (result.startsWith("You Lose!")) {
        computerScore++;
    }

    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent= computerScore


    if (humanScore === 5 || computerScore === 5) {
        let gameResultMessage;

        if (humanScore === 5) {
            gameResultMessage = 'Player Wins The Game!';
        } else if (computerScore === 5) {
            gameResultMessage = 'Computer Wins The Game!';
        } else {
            gameResultMessage = "It's a Tie!";
        }

        resultDisplay.textContent = gameResultMessage;

        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    playerScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent =computerScore;
    resultDisplay.textContent = '';

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}

// adding event listeners

const rock = document.querySelector("#rock")
rock.addEventListener('click', () =>{
    const computerSelection = getComputerChoice();
    const result = (playRound('rock',computerSelection))
    resultDisplay.textContent =result;
    updateScores(result);
})
const paper = document.querySelector("#paper")
paper.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = (playRound('paper',computerSelection))
    resultDisplay.textContent =result;
    updateScores(result);
})
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const result = (playRound('scissors',computerSelection))
    resultDisplay.textContent =result;
    updateScores(result);
})

resetButton.addEventListener('click', resetGame);