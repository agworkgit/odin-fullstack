// Keep track of the score
let humanScore = 0;
let computerScore = 0;

// Human logic - get player value
function getHumanChoice() {
    return prompt('Choose rock, paper or scissors:');
}

// Computer logic - returns randomised values
function getComputerChoice() {
    // Game inputs
    let possibleMoves = ['rock', 'paper', 'scissors'];
    // Computer logic
    // Random value between 0 and 2
    let randomValue = Math.floor(Math.random() * 3);
    return possibleMoves[randomValue];
}

// Game logic - Determines winner
function playRound(humanChoice, computerChoice) {
    // tie
    if (humanChoice === computerChoice) {
        alert(`It's a tie! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // player lost
    // rock vs scissors
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 1;
        alert(`You lost! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // paper vs rock
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore += 1;
        alert(`You lost! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // scissors vs paper
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore += 1;
        alert(`You lost! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    else {
        humanScore += 1;
        alert(`You won! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }

    // winner was determined, reset values
    humanSelection = '';
    computerSelection = '';
}

// Call playGame - it will check each round for a fresh value
function playGame() {
    // Assign function values to variables
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

// Loop 5 rounds
let rounds = 5;

for (let i = 0; i < rounds; i++) {
    playGame();
}

// Show final score
alert(`Final Score - You : ${humanScore}, Computer : ${computerScore}`);