// This function checks the result of the rock, paper, scissors game

function checkResult(playerChoice, computerChoice) {
  // Computer choice is always uppercase, but we want to edit the player choice to ensure that
  // we can support any spelling: 'rOck', 'Rock', 'ROCk'. JS is case-sensitive

  // Handle all ties immediately
  if (playerChoice.toUpperCase() == computerChoice) {
    return 'tie'
  }

  switch (playerChoice.toUpperCase()) {
    case 'ROCK':
      return computerChoice == 'SCISSORS' ? 'playerWin' : 'computerWin';
    case 'PAPER':
      return computerChoice == 'ROCK' ? 'playerWin' : 'computerWin';
    case 'SCISSORS':
      return computerChoice == 'PAPER' ? 'playerWin' : 'computerWin';
  }
}