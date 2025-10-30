// Say hello

// Node terminal input and output setup
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Promise - tell the await to hang on for value
function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Async function will get the value from the promise and handle it
async function main() {
    const name = await askQuestion("What's your name? ");
    console.log(`Hello, ${name}!`);

    // This concludes the process
    rl.close();
}

// This runs the function above
main();

// Important:
// Wrap rl.question in a Promise
// Use await to get input
// Basic console.log output