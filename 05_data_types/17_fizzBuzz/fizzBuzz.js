// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

// Issue 1: create fizzBuzz function

function fizzBuzz(num) {
    if (Number.isInteger(num)) {
        for (let i = 0; i <= num; i++) {
            switch (i <= num) {
                case (i % 3 === 0) && (i % 5 === 0):
                    console.log('fizzBuzz', i);
                    break;
                case i % 3 === 0:
                    console.log('Fizz', i);
                    break;
                case i % 5 === 0:
                    console.log('Buzz', i);
                    break;
                default:
                    console.log(i);
            }
        }
    }
}

module.exports = fizzBuzz;