// Get main body
const mainBody = document.querySelector('main');

// Rounds
let rounds = 6;

// Handle button events
let playerChoice;
let btnContainer = document.getElementById('btn-container');
btnContainer.addEventListener('click', (e) => {
    const target = e.target;

    playGame();

    switch (target.id) {
        case 'rock':
            playerChoice = 'rock';
            break;
        case 'paper':
            playerChoice = 'paper';
            break;
        case 'scissors':
            playerChoice = 'scissors';
            break;
    }
});

// Keep track of the score
let humanScore = 0;
let computerScore = 0;

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
    // Display current result
    const currentResult = document.getElementById('current-game-result');
    // tie
    if (humanChoice === computerChoice) {
        currentResult.textContent = `It's a tie!`;
    }
    // player lost
    // rock vs scissors
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 1;
        currentResult.textContent = `You lost!`;
    }
    // paper vs rock
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore += 1;
        currentResult.textContent = `You lost!`;
    }
    // scissors vs paper
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore += 1;
        currentResult.textContent = `You lost!`;
    }
    else {
        humanScore += 1;
        currentResult.textContent = `You won!`;
    }

    // display counts
    humanScoreBoard.textContent = `Your score: ${humanScore}`;
    computerScoreBoard.textContent = `Computer score: ${computerScore}`;
}

// Call playGame - it will check each round for a fresh value
function playGame() {
    // A round has been played
    rounds = rounds - 1;
    // Assign function values to variables
    const humanSelection = playerChoice;
    const computerSelection = getComputerChoice();

    if (rounds > 0) {
        playRound(humanSelection, computerSelection);
    } else {
        if (rounds === 0) {
            // Display winner
            const winnerMsgElem = document.createElement('p');
            winnerMsgElem.setAttribute('id', 'winner-msg');
            mainBody.appendChild(winnerMsgElem);
            const winnerMsg = document.getElementById('winner-msg');
            let finalWinner = humanScore > computerScore ? 'The final winner is the player!' : 'The final winner is the computer!';
            winnerMsg.textContent = finalWinner;
        }
    }
}

// Display scores
const humanScoreBoard = document.getElementById('player-score');
const computerScoreBoard = document.getElementById('computer-score');

