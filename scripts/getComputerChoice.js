// This function will get the computer's choice in the game

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3); // will return a value of 0, 1, or 2
  switch (randomInt) {
    case 0:
      return 'ROCK';
    case 1:
      return 'PAPER';
    case 2:
      return 'SCISSORS';
  }
}