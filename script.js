function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  let answer = prompt("Rock, Paper or Scissors", ).toLowerCase();
  if (answer === "paper") {
    return 0;
  } else if (answer === "scissors") {
    return 1;
  } else if (answer === "rock") {
    return 2;
  } else {
    return -1;
  }
}

function playRound(playerSelection, computerSelection) {
  const playerWin = "Player win";
  const computerWin = "Computer win";

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
  } else if (playerSelection === -1) {
    console.log("Game canceled");
  } else {
    console.log("Tie");
    return "Tie";
  }
}