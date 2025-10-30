// Create node terminal interface

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Keep track of the score
let humanScore = 0;
let computerScore = 0;

// Ask for input
function askQuestion(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer.toLowerCase().trim());
        });
    });
}

// Human logic - get player value
// Validated and trimmed input
async function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    let choice;

    do {
        choice = await askQuestion('Choose rock, paper or scissors: ');
        if (!validChoices.includes(choice)) {
            console.log('Invalid input! Please type: rock, paper, or scissors');
        }
    } while (!validChoices.includes(choice));
    return choice;
};

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
        console.log(`It's a tie! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // player lost
    // rock vs scissors
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        computerScore += 1;
        console.log(`You lost! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // paper vs rock
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        computerScore += 1;
        console.log(`You lost! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    // scissors vs paper
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        computerScore += 1;
        console.log(`You lost! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
    else {
        humanScore += 1;
        console.log(`You won! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
}

// Call playGame - it will check each round for a fresh value
// This must happen asyncronously
async function playGame() {
    // Assign function values to variables
    const humanSelection = await getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

// This must happen asyncronously too
// Loop 5 rounds
async function startGame() {
    for (let i = 0; i < 5; i++) {
        await playGame();
    }
    // Show final score
    console.log(`Final Score - You : ${humanScore}, Computer : ${computerScore}`);
    rl.close();
}

// Calls the script after you type node <filename>
startGame();



