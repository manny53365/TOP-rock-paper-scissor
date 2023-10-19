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
    const roundResultElement = document.getElementById("roundResult");
    const gameResultElement = document.getElementById("gameResult");

    if (playerSelection === cpuSelection) {
        roundResultElement.textContent = "This round is a tie";
    } else if (
        (playerSelection === "scissors" && cpuSelection === "rock") ||
        (playerSelection === "paper" && cpuSelection === "scissors") ||
        (playerSelection === "rock" && cpuSelection === "paper")
    ) {
        addCpuScore();
        roundResultElement.textContent = `The computer chose ${cpuSelection}. ${cpuSelection} beats ${playerSelection}.`;
    } else {
        addPlayerScore();
        roundResultElement.textContent = `You chose ${playerSelection}. ${playerSelection} beats ${cpuSelection}.`;
    }

    if (playerScore === 5 || cpuScore === 5) {
        endGame();
    }
}

function endGame() {
    const gameResultElement = document.getElementById("gameResult");
    if (playerScore === 5) {
        gameResultElement.textContent = "Congratulations! You have won the game.";
    } else {
        gameResultElement.textContent = "The computer has won the game.";
    }

    // When the player or computer reaches the score of 5, this will hide the play buttons and show the restart button
    document.querySelectorAll('button[onclick^="play"]').forEach(btn => btn.style.display = "none");
    document.getElementById("restartButton").style.display = "block";
}

function restartGame() {
    playerScore = 0;
    cpuScore = 0;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("cpuScore").textContent = cpuScore;
    document.getElementById("roundResult").textContent = "";
    document.getElementById("gameResult").textContent = "";

    // When the restart button is clicked this will show the play buttons and hide the restart button
    document.querySelectorAll('button[onclick^="play"]').forEach(btn => btn.style.display = "inline-block");
    document.getElementById("restartButton").style.display = "none";
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
