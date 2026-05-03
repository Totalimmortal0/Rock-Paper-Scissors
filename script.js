let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3)

    if (randomNum == 0) {
        return "rock"
    } else if (randomNum == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper, or Scissors?")

    if (input.toLowerCase() === "rock") {
        return "rock"
    } else if (input.toLowerCase() === "paper") {
        return "paper"
    } else if (input.toLowerCase() === "scissors") {
        return "scissors"
    } else {
        return "Please enter a valid option: Rock / Paper / Scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log("You win! Rock beats Scissors")
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore++
        console.log("You lose! Rock beats Scissors")
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log("You win! Scissors beats paper")
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore++
        console.log("You lose! Scissors beats paper")
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        console.log("You win! Paper beats Scissors")
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore++
        console.log("You lose! Paper beats Scissors")
    }
}

console.log(getHumanChoice())