let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
 const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, generateTarget) => {
 let diffHuman = Math.abs(humanGuess, generateTarget);
 let diffComputer = Math.abs(computerGuess, generateTarget)
 if(diffHuman === diffComputer || diffHuman < diffComputer) {
   return false
 } else {
   return true
   }
}

const updateScore = (winner) => {
  if(winner === 'human') {
    humanScore++
  } else {
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}




