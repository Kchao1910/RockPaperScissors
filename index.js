/* 
  Legend

  r = rock
  p = paper
  s = scissors
*/

let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let message = document.querySelector("#message");

// This function acts as the main
function game(playerHand) {
  const computerHand = getComputerhand();
  // console.log(playerHand + computerhand);
  const result = determineWinner(playerHand, computerHand);
  // console.log(result);
  updateScore(result, computerHand);
}

function getComputerhand() {
  const choices = ["rock", "paper", "scissors"];

  return choices[Math.floor(Math.random() * 3)];
  // calculation returns either 0, 1, or 2
}

/*
  This function compares the player's hand to the computer's hand
*/
function determineWinner(playerHand, computerHand) {
  switch (playerHand + computerHand) {
    case "rrock":
    case "ppaper":
    case "sscissors":
      return "Tie";
    case "rpaper":
    case "pscissors":
    case "srock":
      return "Computer Wins!";
    case "rscissors":
    case "prock":
    case "spaper":
      return "Player Wins!"
  }
} 

/*
  This function updates the score of the winner
*/
function updateScore(result, computerHand) {
  if (result === "Tie") {
    message.textContent = updateMessage(computerHand) + ", Tie!";
  } 
  else if (result === "Player Wins!") {
    message.textContent = updateMessage(computerHand) + ", Player Wins!";
    playerScore.textContent = convertScore(playerScore);
  }
  else if (result === "Computer Wins!") {
    message.textContent = updateMessage(computerHand) + ", Computer Wins!";
    computerScore.textContent = convertScore(computerScore);
  }
}

function convertScore(element) {
  return parseInt(element.textContent) + 1;
}

function updateMessage(computerHand) {
  return `Computer Chose ${computerHand}`;
}
