function getComputerChoice() {
  console.log(Math.round(Math.random() * 3))
  return Math.round(Math.random() * 3);
}

function playRound(playerSelection) {
  const playerWin = "Player win";
  const computerWin = "Computer win";
  const computerSelection = getComputerChoice();

  // paper = 0; scissors = 1; rock = 2
  if (playerSelection === 0 && computerSelection === 2) {
      console.log(playerWin);
      return playerWin;
  } else if (playerSelection === 2 && computerSelection === 0) {
      console.log(computerWin);
      return computerWin;
  } else if (playerSelection > computerSelection) {
      console.log(playerWin);
      return playerWin;
  } else if (computerSelection > playerSelection) {
      console.log(computerWin);
      return computerWin;
  } else {
      console.log("Tie");
      return "Tie";
  }
};

let playerScore = 0;
let computerScore = 0;

const scoreDisplay = document.querySelector(".scoreDisplay");
scoreDisplay.textContent = `0 vs 0`;

const winnerDisplay = document.querySelector(".winnerDisplay");

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const winner = playRound(playerSelection);
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

