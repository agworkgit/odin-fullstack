// Create interface

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Create question prompt

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

// Use question prompts and print result

async function main() {
    const num1 = await askQuestion("Enter the first number: ");
    const num2 = await askQuestion("Enter the second number: ");
    const sum = Number(num1) + Number(num2);
    console.log(`The sum is: ${sum}`);
    rl.close();
}

main();