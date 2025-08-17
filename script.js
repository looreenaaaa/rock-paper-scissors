function getComputerChoice() {
    const randomNum = Math.random();

    if (randomNum < 1/3) {
        return "rock";
    } else if (randomNum < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, paper or scissors?");

    if (choice === "rock") {
        return "rock";
    } else if (choice === "paper") {
        return "paper";
    } else if (choice === "scissors") {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "rock") {
                console.log("Draw!");
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats rock");
                computerScore++;
            } else if (computerChoice === "scissors") {
                console.log("You win! Rock beats scissors");
                humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You win! Paper beats rock");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("Draw!");
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats paper");
                computerScore++;
            }
            break;
        case "scissors":
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats scissors");
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats paper");
                humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("Draw!");
            }
            break;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human: " + humanScore + " Computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win");
    } else {
        console.log("You lose...");
    }
}

playGame();