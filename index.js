"use strict";

// alert("JS is running");

const moves = ["rock", "paper", "scissors"]

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
        return `Draw! Both chose ${playerMove}.`
    }
    switch (playerMove) {
        case "rock":
            // The victory/loss messages can be refactored/unified completely.
            if (computerMove == "scissors") {
                return "You win! Rock beats scissors."
            } else {
                return "You lose! Paper beats rock."
            }
        case "paper":
            if (computerMove == "rock") {
                return "You win! Paper beats rock."
            } else {
                return "You lose! Scissors beat paper."
            }
        case "scissors":
            if (computerMove == "paper") {
                return "You win! Scissors beat paper."
            } else {
                return "You lose! Rock beats scissors."
            }
        default:
            return "invalid"
    }


}