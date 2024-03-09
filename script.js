function getComputerChoice() {
    if (Math.floor(Math.random() * 100) <= 33) {
        return "Rock";
    } else if (Math.floor(Math.random() * 100) <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "Rock") {
        return "It's a tie! Go again!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Paper") {
        return "It's a tie! Go again!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Scissors") {
        return "It's a tie! Go again!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper!";
    }
};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));