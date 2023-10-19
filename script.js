// window.onload = function () {
//     alert("Open your console window");
// }

// This is a rock, paper, scissors game for The Odin Project

let playerScore = 0;
let cpuScore = 0;

const getPlayerSelection = (choice) => {
    return choice;
};

const getComputerChoice = () => {
    const cpuOptions = ["rock", "paper", "scissors"];
    return cpuOptions[Math.floor(Math.random() * cpuOptions.length)];
};

const playRound = (playerSelection, cpuSelection) => {
    const resultElement = document.getElementById("result");

    if (playerSelection === cpuSelection) {
        resultElement.textContent = "This round is a tie";
    } else if (
        (playerSelection === "scissors" && cpuSelection === "rock") ||
        (playerSelection === "paper" && cpuSelection === "scissors") ||
        (playerSelection === "rock" && cpuSelection === "paper")
    ) {
        addCpuScore();
        resultElement.textContent = `The computer has ${cpuScore} point(s), ${cpuSelection} beats ${playerSelection}.`;
        if (cpuScore === 5) {
            resultElement.textContent += " The computer has won the game.";
        }
    } else {
        addPlayerScore();
        resultElement.textContent = `You have ${playerScore} point(s), ${playerSelection} beats ${cpuSelection}.`;
        if (playerScore === 5) {
            resultElement.textContent += " Congratulations! You have won the game.";
        }
    }
}

const play = (choice) => {
    const playerSelection = getPlayerSelection(choice);
    const cpuSelection = getComputerChoice();
    playRound(playerSelection, cpuSelection);
}

function addCpuScore() {
    cpuScore++;
    document.getElementById("cpuScore").textContent = cpuScore;
}

function addPlayerScore() {
    playerScore++;
    document.getElementById("playerScore").textContent = playerScore;
}
