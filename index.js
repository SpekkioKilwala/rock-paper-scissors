"use strict";

// alert("JS is running");

const moves = ["rock", "paper", "scissors"]
const roundsPerMatch = 5; // might want to make this variable later without changing the name
let wins = 0;
let draws = 0;
let losses = 0;
let gameStatus = "";

const btRock = document.querySelector('#rock');
const btPaper = document.querySelector('#paper');
const btScissors = document.querySelector('#scissors');
const btRestart = document.querySelector('#restart');
const statusDisplay = document.querySelector('#status');

btRock.addEventListener('click', () => {playRound('rock')})
btPaper.addEventListener('click', () => {playRound('paper')})
btScissors.addEventListener('click', () => {playRound('scissors')})
btRestart.addEventListener('click', () => {
    gameStatus = "";
    newGame();
})

newGame();

function addStatusLine(line) {
    // Trim off the FRONT end if it's too long,
    // add the given string to the end of status,
    // and display.
    if (gameStatus.length > 1000) {
        gameStatus = gameStatus.slice(-1000);
    }
    gameStatus = (gameStatus + "\r\n" + line).trim()
    statusDisplay.textContent = gameStatus;
}

function newGame() {
    // Resets all the tally stuff to zero
    wins = draws = losses = 0;
    addStatusLine("Game ready! CHOOSE YOUR FIGHTER!")
    displayScore();
}

function roundsPlayed() {
    return (wins + draws + losses);
}

function randPick(choices) {
    // given an array of items, pick one of them
    const pick = Math.floor(Math.random() * choices.length);
    return choices[pick];
}

function getComputerMove() {
    // randomly pick "rock", "paper", or "scissors"
    return randPick(moves);
}

function matchUp(playerMove, computerMove) {
    // I don't like hard-coding who's who but whatever
    playerMove = playerMove.toLowerCase()
    computerMove = computerMove.toLowerCase()
    if (playerMove == computerMove) {
        return `draw`
    }
    switch (playerMove) {
        case "rock":
            // The victory/loss messages can be refactored/unified completely.
            if (computerMove == "scissors") {
                return "win"
            } else {
                return "lose"
            }
        case "paper":
            if (computerMove == "rock") {
                return "win"
            } else {
                return "lose"
            }
        case "scissors":
            if (computerMove == "paper") {
                return "win"
            } else {
                return "lose"
            }
        default:
            return "invalid"
    }
}

function playRound(playerMove) {
    // Accept player and computer moves, see who the winner is, add the result to the totals.
    let computerMove = getComputerMove();
    let roundOutcome = matchUp(playerMove, computerMove);
    console.log(roundOutcome);
    switch (roundOutcome) {
        case "win":
            addStatusLine(`You win! ${playerMove} beats ${computerMove}.`);
            wins++;
            break;
        case "draw":
            addStatusLine(`Draw! Both picked ${playerMove}.`);
            draws++;
            break;
        case "lose":
            addStatusLine(`You lose! ${playerMove} loses to ${computerMove}.`);
            losses++;
            break;
        default:
            addStatusLine("Invalid response, discarding round result.");
    }
    displayScore();
    checkGameOver();
}

function displayScore() {
    addStatusLine(`Wins: ${wins} | Draws: ${draws} | Losses: ${losses}`);
}

function checkGameOver(){
    if (wins + draws + losses >= 5) {gameOver()}
}

function gameOver(){
    // Count up the points and declare a winner.
    let summary = "Tallying scores..."; // should never actually display
    if (wins > losses) {
        summary = "A winner is you!"
    } else if (wins == losses) {
        summary = "It's a draw!"
    } else {
        summary = "Dishonour on YOU, dishonour on your ANCESTORS, dishonour on your COW..."
    }
    addStatusLine("Game over!");
    addStatusLine(summary);
    addStatusLine("===----------------===")
    newGame();
}