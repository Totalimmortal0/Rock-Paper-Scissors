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



function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++
            console.log(`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou win! Rock beats Scissors")
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            computerScore++
            console.log(`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou lose! Rock beats Scissors")
        }

        if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++
            console.log(`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou win! Scissors beats paper")
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            computerScore++
            console.log(`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou lose! Scissors beats paper")
        }

        if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++
            console.log(`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou win! Paper beats Rock")
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            computerScore++
            console.log(`You Chose: ${humanChoice} | Computer chose: ${computerChoice}` + "\nYou lose! Paper beats Rock")
        }

        if (humanChoice === computerChoice) {
            console.log(`Draw! You Chose: ${humanChoice} | Computer chose: ${computerChoice}`)
        }
    }

    for (let round = 1; round <= 5; round++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log(`You win!\n==Final Score==\nYou: ${humanScore} | Computer: ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lose!\n==Final Score==\nYou: ${humanScore} | Computer: ${computerScore}`)
    } else {
        console.log(`It's a draw!\n==Final Score==\nYou: ${humanScore} | Computer: ${computerScore}`)
    }
}

playGame()