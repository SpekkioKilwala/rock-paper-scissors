"use strict";

// alert("JS is running");

const moves = ["rock", "paper", "scissors"]
let wins = 0;
let draws = 0;
let losses = 0;

function newGame() {
    // Resets all the tally stuff to zero
    wins = draws = losses = 0;
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

function playRound() {
    // Accept player and computer moves, see who the winner is, add the result to the totals.
    let playerMove = prompt("Pick: rock, paper, or scissors!");
    let computerMove = getComputerMove();
    let roundOutcome = matchUp(playerMove, computerMove);
    console.log(roundOutcome);
    switch (roundOutcome) {
        case "win":
            console.log(`You win! ${playerMove} beats ${computerMove}.`);
            wins++;
            break;
        case "draw":
            console.log(`Draw! Both picked ${playerMove}.`);
            draws++;
            break;
        case "lose":
            console.log(`You lose! ${playerMove} loses to ${computerMove}.`);
            losses++;
            break;
        default:
            console.log("Invalid response, discarding round result.");
    }
    console.log(`Wins: ${wins} | Draws: ${draws} | Losses: ${losses}`);
}