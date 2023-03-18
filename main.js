
function getComputerChoice() {
    let values = ["Rock", "Paper", "Scissor"];
    let rand = Math.floor(Math.random() * 3);
    let choice = values[rand]
    return choice
}
function playRound(playerSelection, computerSelection) {
    let choice = ""
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
    if (playerSelection === computerSelection) {
        choice = "draw!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        choice = `You Lose! Paper beats Rock`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        choice = `You Win! Paper beats Rock`
    } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
        choice = `You Win! Rock beats Scissor`
    } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
        choice = `You Lose! Rock beats Scissor`
    } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
        choice = `You Win! Scissor beats Paper`
    } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
        choice = `You Lose! Scissor beats Paper`
    } else {
        choice = "Wrong input"
    }
    return choice
}

function game() {
    let wins = 0;
    let loses = 0;
    for (let i = 1; i <= 5 ; i++) {
        let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
        let computerSelection = getComputerChoice()
        let res = playRound(playerSelection, computerSelection)
        console.log(res)
        if (res.slice(0, 7) === "You Win" ) {
            wins +=1
        } else if (res.slice(0, 8) === "You Lose") {
            loses+= 1
        } 
    }
    if (wins > loses) {
        return "Winner"
    } else if (wins < loses) {
        return "Loser"
    } else {
        return "Draw"
    }
}

console.log(game())




