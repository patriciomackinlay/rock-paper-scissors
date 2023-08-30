function game() {
    for(let i = 1; i < 5; i++) {
        const playerSelection = getPlayerSelection();
        const computerChoice = getComputerChoice();
        console.log("computer chose " + computerChoice);
        playRound(playerSelection, computerChoice);
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random * 300) + 1
    if (randomNumber < 100) {
        return "rock";
    } else if (randomNumber < 200) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerSelection() {
    let playerSelection = prompt("Rock, paper or scissors?")
    playerSelection.toLowerCase;
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            youTie(playerSelection);
        } else if(computerSelection === "paper") {
            youLose(computerSelection, playerSelection);
        } else {
            youWin(playerSelection, computerSelection);
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            youTie(playerSelection);
        } else if(computerSelection === "scissors") {
            youLose(computerSelection, playerSelection);
        } else {
            youWin(playerSelection, computerSelection);
        }
    } else {
        if (computerSelection === "scissors") {
            youTie(playerSelection);
        } else if(computerSelection === "rock") {
            youLose(computerSelection, playerSelection);
        } else {
            youWin(playerSelection, computerSelection);
        }
    }
}

function youWin(winningSelection, losingSelection) {
    console.log("You win! " + winningSelection+ " beats " + losingSelection + ".")
}

function youLose(winningSelection, losingSelection) {
    console.log("You lose! " + winningSelection + " beats " + losingSelection + ".")
}

function youTie(selection) {
    console.log("You tied! You both chose " + selection + ".")
}

function capitalize(text) {
    const firstLetter = text.CharAt(0).toUpperCase;
    const remainingText = text.slice(1);
    let capitalized = firstLetter + remainingText;
    return capitalized;
}
