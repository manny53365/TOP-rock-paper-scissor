window.onload = function () {
    alert("Open your console window");
}

// // This is a rock, paper, scissors game for The Odin Project

let playerScore = 0;
let cpuScore = 0;

const getPlayerSelection = () => {
    while (true) {
        const playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();

        if (['rock', 'paper', 'scissors'].includes(playerChoice)) {
            return playerChoice;
        } else {
            alert("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        }
    }
};

const getComputerChoice = () => {
    const cpuOptions = ["rock", "paper", "scissors"];
    return cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
};

const playRound = (playerSelection, cpuSelection) => {
    if (playerSelection === cpuSelection) {
        console.log("This round is a tie");
    } else if (
        (playerSelection === "scissors" && cpuSelection === "rock") ||
        (playerSelection === "paper" && cpuSelection === "scissors") ||
        (playerSelection === "rock" && cpuSelection === "paper")
    ) {
        addCpuScore();
        console.log(`The computer has ${cpuScore} point(s), ${cpuSelection} beats ${playerSelection}.`);
        if (cpuScore === 5) {
            console.log("The computer has won the game.");
        }
    } else {
        addPlayerScore();
        console.log(`You have ${playerScore} point(s), ${playerSelection} beats ${cpuSelection}.`);
        if (playerScore === 5) {
            console.log("Congratulations! You have won the game.");
        }
    }
}

const game = () => {
    while (playerScore < 5 && cpuScore < 5) {
        const playerSelection = getPlayerSelection();
        const cpuSelection = getComputerChoice();
        playRound(playerSelection, cpuSelection);
    }

    return "Game over!";
}

function addCpuScore() {
    cpuScore++;
}

function addPlayerScore() {
    playerScore++;
}
