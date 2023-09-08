function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function getPlayerChoice() {
  let answer = prompt("Rock, Paper or Scissors", )
  if (answer === null) {
    return -1;
  } else {
    answer.toLowerCase();

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
}

function playRound(playerSelection, computerSelection) {
  const playerWin = "Player win";
  const computerWin = "Computer win";
  
    if (playerSelection === -1) {
      return "Game canceled";
  } else if (playerSelection === 0 && computerSelection === 2) {
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
}

function game() {
  let playerScores = 0;
  let computerScores = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
  
    if (result === "Game canceled") {
      console.log("Game canceled");
      i = 5;
    } else if (result === "Player win") {
      ++playerScores;
    } else if (result === "Computer win") {
      ++computerScores;
    }
	}
    
  console.log(`Player ${playerScores} - ${computerScores} Computer`);
  if (playerScores > computerScores) {
    console.log("You win");
  }
  else if (computerScores > playerScores) {
    console.log("Computer win");
  }
  else {
    console.log("Tie");
  }
}

game();