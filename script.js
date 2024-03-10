const playerSelection = prompt("Rock, paper or scissors?", " ").toLowerCase();
const computerSelection = getComputerChoice();

let userScore = 0; 
let compScore = 0;
let userCount = 0;

function getComputerChoice() {
    if (Math.floor(Math.random() * 100) <= 33) {
        return "Rock";
    } else if (Math.floor(Math.random() * 100) <= 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(playerSelection, computerSelection) {

    
    if (playerSelection === "rock" && computerSelection == "Rock") {
        userScore++;
        compScore++;
        return "It's a tie! Rock & Rock";
    } else if (playerSelection === "paper" && computerSelection == "Paper") {
        userScore++;
        compScore++;
        return "It's a tie! Paper & paper";
    } else if (playerSelection === "scissors" && computerSelection == "Scissors") {
        userScore++;
        compScore++;
        return "It's a tie! Scissors & scissors";
    } else if (playerSelection === "paper" && computerSelection == "Rock") {
        userScore++;
        return "You Win! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection == "Paper") {
        compScore++;
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection == "Scissors") {
        userScore++;
        return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection == "Rock") {
        compScore++;
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection == "Scissors") {
        compScore++;
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection == "Paper") {
        userScore++;
        return "You Win! Scissors beats Paper!";
    } else {
        return "Enter a valid option";
    }
}

// console.log(playRound());


function playGame() {

    for (let i = 1; i < 6; i++){
    let playerSelection = prompt("Pick your weapon?", "").toLowerCase();
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`Round ${i}`);
    console.log(`You picked: ${playerSelection} Computer picked: ${computerSelection}`);
    console.log(`Your score: ${userScore} Computer Score: ${compScore}`);
    userCount++;
    }

    if (userCount == 5) {
        if (userScore == compScore) {
            return "GAME OVER. It's a TIE";
        } else if (userScore > compScore) {
            return "GAME OVER. You WIN";
        } else {
            return "GAME OVER. You lose.";
        }
    } 
};

console.log(playGame());
