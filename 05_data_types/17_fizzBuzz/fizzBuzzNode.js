// Issue 2: get console input and feed it to the function then output result

// First, import the function and readline from Node
const fizzBuzz = require('./fizzBuzz');
const readline = require('readline');
// Use readline to create an interface with input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Get input from the user and run the function
rl.question(`Please input a number to start fizzBuzz: `, (num) => {
    fizzBuzz(parseInt(num)); // Input is a string, parse as integer
    rl.close();
});