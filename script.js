/*
Dennis Nierzwicki's Rock, Paper, Scissors game.

This game is the first JavaScript project in The Odin Project

*/

let gamesToPlay = NaN;
let inputValidation;
let keepPlaying;
let userGuess;
let computerGuess;
let userScore = 0;
let computerScore = 0;
let stillPlaying = true;
const commands = ["rock", "paper", "scissors"];

// How many games should we play?
function gamesToBePlayed() {

    inputValidation = false;
    while (!inputValidation) {
        gamesToPlay = parseInt(prompt("How many games should we play? (Min 3)"));
        // Validate a number >= 3
        if (Number.isInteger(gamesToPlay) && gamesToPlay >= 3) {
            inputValidation = true;
            return gamesToPlay;
        } else {
            alert("Please use a number that is 3 or more games.");
            inputValidation = false;
        }
    }

}

function mainGame(games) {

    // LOOP gamesToPlay x's
    for (let i = 1; i <= games; i++) {

        // Computer picks rock, paper, or scissors
        computerGuess = commands[Math.floor(Math.random() * commands.length)];
        console.log(computerGuess); //delete
        inputValidation = false;
        while (!inputValidation) {

            // User picks rock, paper, or scissors
            userGuess = prompt("Rock, Paper, or Scissors?").toLowerCase();

            // Validate the input - Is it a number?
            if (commands.includes(userGuess)) {
                inputValidation = true;
            } else {
                alert("Sorry, I didn't catch that. Try again.");
            }
        }
        gameResults(userGuess, computerGuess);
    }
    calcScore(userScore, computerScore);

}

function gameResults(user, comp) {

    if (user === comp) {
        userScore++;
        computerScore++;
        alert("It's A Tie!");
    } else if (user === "rock" && comp === "scissors"
        || user === "paper" && comp === "rock"
        || user === "scissors" && comp === "paper") {
        // User scores a point
        userScore++;
        alert("You Win!");
    } else if (comp === "rock" && user === "scissors"
        || comp === "paper" && user === "rock"
        || comp === "scissors" && user === "paper") {
        // Computer scores a point
        computerScore++;
        alert("I Win!");
    };

}

function calcScore(userPoints, compPoints) {

    // If User points > Computer Points
    if (userPoints > compPoints) {
        // User Wins!
        alert(`You won! Final score: You ${userScore} — Computer ${computerScore}`);
        // If computer Points > User Points
    } else if (userPoints < compPoints) {
        // Computer Wins!
        alert(`Your computer overlord WINS! Final score: You ${userScore} — Computer ${computerScore}`);
    } else {
        // Else it's a tie.
        alert(`We both tied, try again! Final score: You ${userScore} — Computer ${computerScore}`);
    }
}

function playAgain() {

    // Reset inputValidation
    inputValidation = false;
    while (!inputValidation) {
        // Play again?
        keepPlaying = prompt("Would you like to keep playing? Yes or No.").toLowerCase();
        if (keepPlaying[0] === "y") {
            stillPlaying = true;
            computerScore = 0;
            userScore = 0;
            inputValidation = true;
        } else if (keepPlaying[0] === "n") {
            stillPlaying = false;
            inputValidation = true;
        } else {
            alert("Sorry, I don't understand that. Try again.");
        }
    }

}

function main() {

    while (stillPlaying) {
        gamesToBePlayed();
        mainGame(gamesToPlay);
        playAgain();
    };

}

main();

alert("Thank you for playing Rock, Paper, Scissors!");