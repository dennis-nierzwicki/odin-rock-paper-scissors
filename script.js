// I need a gamesToPlay variable
// I need a userGuess variable
// I need a random number variable
// I need a computerGuess variable
// I need a userScore variable
// I need a computerScore variable
// I need a bool stillPlaying variable

let gamesToPlay = NaN;
let inputValidation = false;
let userGuess;
let computerGuess;
let userScore = 0;
let computerScore = 0;
let stillPlaying = true;
let commands = ["rock", "paper", "scissors"];

// How many games should we play?
function gamesToBePlayed() {
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
    for (i = 1; i >= games; i++) {
        let randomNumber = Math.floor(Math.random() * 3 + 1);
        if (randomNumber === 1) {
            computerGuess = "Rock";
        } else if (randomNumber === 2) {
            computerGuess = "Paper";
        } else {
            computerGuess = "Scissors";
        }
        inputValidation = false;
        while (!inputValidation) {
            userGuess = prompt("Rock, Paper, or Scissors?").toLowerCase();
            if (commands.includes(userGuess)) {
                inputValidation = true;
            } else {
                alert("Sorry, I didn't catch that. Try again.");
            }
        }
    }
    // LOOP gamesToPlay x's
    // Computer picks rock, paper, or scissors

    // User picks rock, paper, or scissors
    // Validate the input - Is it a number?

    // If computer Points > User Points
    // Computer Wins!
    // Else if User points > Computer Points
    // User Wins!
    // Else
    // It's a Tie
    // Start again or done playing
}

function gameResults(user, comp) {

    // User picks Rock
    // Computer picks scissors
    // User scores a point
    // Computer picks paper
    // Computer scores a point
    // Else Both get a point - TIE
    // User picks Paper
    // Computer picks scissors
    // Computer scores a point
    // Computer picks rock
    // User scores a point
    // Else Both get a point - TIE
    // User picks Rock
    // Computer picks scissors
    // User scores a point
    // Computer picks paper
    // Computer scores a point
    // Else Both get a point - TIE
}

function playAgain() {
    // Play Again?
    // Validate answer
    // Still playing is still true
    // Else Still playing = False
}

// LOOP if stillPlaying is True
//while (stillPlaying)    {
//    gamesToBePlayed();
//}

// End Game


