// console.log('hello, world!');

// This is a rock, paper, scissors game for The Odin Project

let cpuSelection;
let playerSelection;
let playerScore=0;
let cpuScore=0;

myArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){
    return myArray[(Math.random() * myArray.length)];
};

const playRound = (playerSelection,cpuSelection) => {
    cpuSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === cpuSelection) {
        return 'The round is a tie';
    } else if (playerSelection == "scissors" && cpuSelection == "rock") || (cpuSelection == "scissors" && playerSelection == "paper") || (cpuSelection == "paper" && playerSelection == "rock") {
        cpuScore = ++cpuScore;
        keepCpuScore();
        if (cpuScore === 1) {
            return `The computer has 1 point, ${cpuSelection} beats ${playerSelection}.`;
        } else if (cpuScore === 2) {
            return `The computer has 2 points, ${cpuSelection} beats ${playerSelection}.`;
        } else if (cpuScore === 3) {
            return `The computer has 3 points, ${cpuSelection} beats ${playerSelection}.`;
        } else if (cpuScore === 4) {
            return `The computer has 4 points, ${cpuSelection} beats ${playerSelection}.`;
        } else {
            return `The computer has 5 points, ${cpuSelection} beats ${playerSelection}. The computer has won the game.`;
        }
    } else {
        playerScore = ++playerScore;
    }
}

function keepCpuScore() {
    let cpuTotalScore = cpuScore;
}

function keepPlayerScore(){
    let playterTotalScore = playerScore;
}