const buttons = document.querySelectorAll("button");
const rock = document.querySelector("#rock");
let playerRock = rock.addEventListener("click", (e) => {
    console.log(e.target.id);
});
const paper = document.querySelector("#paper");
let playerPaper = paper.addEventListener("click", (e) => {
    console.log(e.target.id);
});
const scissors = document.querySelector("#scissors");
let playerScissors = scissors.addEventListener("click", (e) => {
    console.log(e.target.id);
});
const container = document.querySelector("#container");
let round = document.querySelector(".round");
round.textContent = "Round: 0";
let picks = document.querySelector(".picks");
let outcome = document.querySelector(".outcome");
let score = document.querySelector(".score");
let over = document.querySelector(".game-over");

let playerSelection;
let computerSelection;
let userScore = 0; 
let compScore = 0;
let userCount = 0;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
    let playerSelection = e.target.id;
    userCount += 1;
    round.textContent = `Round: ${userCount}`;

    let computerSelection = getComputerChoice();
    function getComputerChoice() {
        if (Math.floor(Math.random() * 100) <= 33) {
            return "rock";
        } else if (Math.floor(Math.random() * 100) <= 66) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    picks.textContent = `You picked ${playerSelection} and computer picked ${computerSelection}`;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            userScore += 1;
            compScore += 1;
            score.textContent = `User score is ${userScore} and computer score is ${compScore}`;
            outcome.textContent = "It's a tie this round!"
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            userScore += 1;
            score.textContent = `User score is ${userScore} and computer score is ${compScore}`;
            outcome.textContent = "You win this round! Paper beats Rock!";
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            compScore += 1;
            score.textContent = `User score is ${userScore} and computer score is ${compScore}`;
            outcome.textContent = "You lose this round! Paper beats Rock!";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            userScore += 1;
            score.textContent = `User score is ${userScore} and computer score is ${compScore}`;
            outcome.textContent = "You win this round! Rock beats Scissors!";
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            compScore += 1;
            score.textContent = `User score is ${userScore} and computer score is ${compScore}`;
            outcome.textContent = "You lose this round! Rock beats Scissors!";
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            compScore += 1;
            score.textContent = `User score is ${userScore} and computer score is ${compScore}`;
            outcome.textContent = "You lose this round! Scissors beats Paper!";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            userScore += 1;
            score.textContent = `User score is ${userScore} and computer score is ${compScore}`;
            outcome.textContent = "You win this round! Scissors beats Paper!";
        } 
    }
    playRound(playerSelection, computerSelection);
    if (userCount === 5) {
        if (userScore == compScore) {
            over.textContent = "GAME OVER! It's a tie!";
        } else if (userScore > compScore) {
            over.textContent = "GAME OVER! You win =)";
        } else {
            over.textContent = "GAME OVER! You lose =(";
        }

        let restart = document.createElement("button");
        restart.textContent = "Try Again";
        document.body.appendChild(restart);
        restart.addEventListener("click", () => {
            window.location.reload();
            return false;
        })
    } 
    });
});
