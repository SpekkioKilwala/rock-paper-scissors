"use strict";

// alert("JS is running");

const moves = ["rock", "paper", "scissors"]


function randPick(choices) {
    // given an array of items, pick one of them
    const pick = Math.floor(Math.random() * choices.length);
    return choices[pick];
}

function getComputerChoice() {
    // randomly pick "rock", "paper", or "scissors"
    return randPick(moves);
}