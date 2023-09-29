// This script runs the game five times

function game() {
  
  let gameWins = [0, 0];

  // The game can run up to 5 times and is a best of 3. So we can exit the loop when we reach 3 wins
  while (Math.max(...gameWins) < 3) {
    // Gets the player's choice
    playerChoice = prompt('Rock, Paper, or Scissors?!?!??');
    // Determines who wins
    gameResult = checkResult(playerChoice, getComputerChoice());
    // Scores the existing games
    if (gameResult == 'playerWin') {
      gameWins[0] += 1;
      console.log("You won!")
    }
    else if (gameResult == 'computerWin') {
      gameWins[1] += 1;
      console.log("You lost :/")
    }
    else {
      // If neither a player or computer win then it's a tie and the game continues unchanged
      console.log("You tied")
    }
  }
  gameWins[0] > gameWins[1] ? console.log('You win!') : console.log('You lose :(')
}