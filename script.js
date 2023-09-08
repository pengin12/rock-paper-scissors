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