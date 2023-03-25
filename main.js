function getComputerChoice() {
  let values = ["Rock", "Paper", "Scissor"];
  let rand = Math.floor(Math.random() * 3);
  let choice = values[rand];
  return choice;
}
function playRound(playerSelection, computerSelection) {
  let choice = "";
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
  if (playerSelection === computerSelection) {
    choice = "draw!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    choice = `You Lose! Paper beats Rock`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    choice = `You Win! Paper beats Rock`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    choice = `You Win! Rock beats Scissor`;
  } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    choice = `You Lose! Rock beats Scissor`;
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    choice = `You Win! Scissor beats Paper`;
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    choice = `You Lose! Scissor beats Paper`;
  } else {
    choice = "Wrong input";
  }
  return choice;
}
function showMsg(e) {
  const playerSelection = e.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();

  const roundResult = document.createElement("p");
  roundResult.textContent = playRound(playerSelection, computerSelection);
  roundResult.classList.add("para");
  document.querySelector(".game").append(roundResult);
  if (roundResult.previousElementSibling.className === "para") {
    roundResult.previousElementSibling.remove();
  }
  getFinalResult();
}
const btns = document.querySelectorAll(".buttons>button");

let wins = 0;
let loses = 0;
function getFinalResult() {
  const winOrLose = document.querySelector(".para");
  const youValue = document.querySelector(".you");
  const computerValue = document.querySelector(".computer");
  if (winOrLose.textContent.slice(0, 7) === "You Win") {
    wins += 1;
  } else if (winOrLose.textContent.slice(0, 8) === "You Lose") {
    loses += 1;
  }
  youValue.textContent = "You: " + wins;
  computerValue.textContent = "Computer: " + loses;
  if (wins > 4) {
    wins = 0;
    loses = 0;
    const finalResult = document.createElement("p");
    finalResult.textContent = "Congratulations, You won. Play again?";
    finalResult.classList.add("para");
    document.querySelector(".game").append(finalResult);
    if (finalResult.previousElementSibling.className === "para") {
      finalResult.previousElementSibling.remove();
    }
    return;
  } else if (loses > 4) {
    wins = 0;
    loses = 0;
    const finalResult = document.createElement("p");
    finalResult.textContent = "Hard Luck, Computer won. Play again?";
    finalResult.classList.add("para");
    document.querySelector(".game").append(finalResult);
    if (finalResult.previousElementSibling.className === "para") {
      finalResult.previousElementSibling.remove();
    }
    return;
  }
}
btns.forEach(function (btn) {
  btn.addEventListener("click", showMsg);
});
