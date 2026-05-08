const buttons = document.querySelectorAll("button")
const rockBtn = document.querySelector(".rockBtn")
const paperBtn = document.querySelector(".paperBtn")
const scissorsBtn = document.querySelector(".scissorsBtn")
const playerScore = document.querySelector(".playerScore")
const compScore = document.querySelector(".compScore")
const scoreDiv = document.querySelector(".scoreDiv")
const result = document.querySelector(".result")

let playerScoreCount = 0
let computerScoreCount = 0

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.innerText, getComputerChoice())
        isGameFinished()
    })
})

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

function updateScore() {
    playerScore.innerText = playerScoreCount
    compScore.innerText = computerScoreCount
}
updateScore()

function isGameFinished() {
    if (playerScoreCount >= 5 || computerScoreCount >= 5) {
        if (playerScoreCount > computerScoreCount) {
            result.innerText = (`You win!\n==Final Score==\nYou: ${playerScoreCount} | Computer: ${computerScoreCount}`)
        } else if (playerScoreCount < computerScoreCount) {
            result.innerText = (`You lose!\n==Final Score==\nYou: ${playerScoreCount} | Computer: ${computerScoreCount}`)
        } else {
            result.innerText = (`It's a draw!\n==Final Score==\nYou: ${playerScoreCount} | Computer: ${computerScoreCount}`)
        }
        return true
    }
}

function playRound(humanChoice, computerChoice) {
    if (isGameFinished()) {
        return
    }
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === "rock" && computerChoice === "scissors") {
        playerScoreCount++
        result.innerText = (`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou win! Rock beats Scissors")
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScoreCount++
        result.innerText = (`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou lose! Rock beats Scissors")
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        playerScoreCount++
        result.innerText = (`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou win! Scissors beats paper")
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScoreCount++
        result.innerText = (`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou lose! Scissors beats paper")
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        playerScoreCount++
        result.innerText = (`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou win! Paper beats Rock")
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScoreCount++
        result.innerText = (`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou lose! Paper beats Rock")
    }

    if (humanChoice === computerChoice) {
        result.innerText = (`Draw! You Chose: ${humanChoice} | Computer chose: ${computerChoice}`)
    }

    updateScore()
}

