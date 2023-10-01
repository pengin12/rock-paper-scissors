function getComputerChoice() {
  return Math.round(Math.random() * 3);
}

function playRound(playerSelection, computerSelection) {
  const playerWin = "Player win";
  const computerWin = "Computer win";

  // paper = 0; scissors = 1; rock = 2
  if (playerSelection === "0" && computerSelection === 2) {
      return playerWin;
  } else if (playerSelection === "2" && computerSelection === 0) {
      return computerWin;
  } else if (playerSelection > computerSelection) {
      return playerWin;
  } else if (computerSelection > playerSelection) {
      return computerWin;
  } else {
      return "Tie";
  }
};

let playerScore = 0;
let computerScore = 0;

const scoreDisplay = document.querySelector(".scoreDisplay");
scoreDisplay.textContent = `0 vs 0`;

const winnerDisplay = document.querySelector(".winnerDisplay");
const playerEmoji = document.querySelector(".playerEmoji");
const computerEmoji = document.querySelector(".computerEmoji");

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getComputerChoice();
    console.log(playerSelection);

    if (playerSelection === "2") {
      playerEmoji.textContent = "✊";
    } else if (playerSelection === "1") {
      playerEmoji.textContent = "✌️";
    } else if (playerSelection === "0") {
      playerEmoji.textContent = "✋";
    }

    if (computerSelection === 2) {
      computerEmoji.textContent = "✊";
    } else if (computerSelection === 1) {
      computerEmoji.textContent = "✌️";
    } else {
      computerEmoji.textContent = "✋";
    }

    const winner = playRound(playerSelection, computerSelection);
    if (winner === "Player win") {
      ++playerScore;
    } else if (winner === "Computer win") {
      ++computerScore;
    }

    scoreDisplay.textContent = `${playerScore} vs ${computerScore}`;

    if (playerScore === 5) {
      winnerDisplay.textContent = "Player win";
      playerScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      winnerDisplay.textContent = "Computer win";
      playerScore = 0;
      computerScore = 0;
    } else {
      winnerDisplay.textContent = "";
    }
  });
});

