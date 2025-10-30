// Map
let nums = [1, 2, 3, 4, 5];
// Let's say we want to return a new array where each num is incremented by 1, we can use .map to achieve it
let incrNums = nums.map((num) => num + 1);
console.log(incrNums); // [ 2, 3, 4, 5, 6 ]
// So map will take an array, iterate through each item and the callback function will perform some modification on each item

// Filter
// Getting the data you need
// Let's say you want only the odd nums from an array
let naturals = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = naturals.filter((num) => num % 2 != 0);
console.log(oddNums); // [ 1, 3, 5, 7 ]

// Reduce
// What if you wanted to multiply an array of nums?
// Here the callback expects two args
// One will be the 'accumulator' which is the current value of the result at each point in the iteration, and a secund argument 'current' which will be the item currently being iterated
// We can also provide and additional argument 'initialValue' after the callback if we don't want to start at the first valie in the array

const arr = [1, 2, 3, 4, 5];
const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
}, 1); // start with the value 1. why? because anything multiplied by 0 will result in 0
console.log(productOfAllNums); // 120

// So what .reduce() will do is go through every element in arr and apply the callback function to it. 
// It updates total without actually changing the array itself. After it’s done, it returns total.

// Practice - sumOfTripledEvens(array)

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNums = numArr.filter(num => num % 2 === 0);
// 2, 4, 6, 8
let tripledEvens = evenNums.map(num => num * 3);
// 6, 12, 18, 24
let sumOfTripledEvens = tripledEvens.reduce((total, current) => {
    return total += current;
});
// 60
console.log(sumOfTripledEvens); // 60

// Not bad, but look at this refactor

// function sumOfTripledEvens(array) {
//     return array
//         .filter((num) => num % 2 === 0)
//         .map((num) => num * 3)
//         .reduce((acc, curr) => acc + curr);
// }

// Translate border-left-width to borderLeftWidth
function camelize(str) {
    let delimiter = str.indexOf('-') + 1;
    let firstPart = str.slice(0, delimiter - 1);
    let capital = str.slice(delimiter, delimiter + 1).toUpperCase();
    let secondPart = str.slice(delimiter + 1, str.length);
    return firstPart + capital + secondPart;
}

// console.log(camelize("background-color-color"));
// BAD - if the string contains more than 2 words this solution breaks!

// Solution

function camelizeSolution(str) {
    return str
        .split('-') // ['bg', 'color']
        // map takes current 'word' and the index, then it asks is the index = 0 ? if yes return word, if not return first letter uppercased and concatinate it with the rest of the word from index 1 onwards
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        // word[0].toUpperCase = C + word.slice(1) = olor -> ['bg', 'Color'];
        .join(''); // bgColor
}

console.log(camelizeSolution('bg-color'));
console.log(camelizeSolution('bg-new-color'));

// Use again - this time instead of capitalising, flip the case for each even letter

function jumbleUp(str) {
    return str
        .split('')
        .map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase())
        .join('');
}

console.log(jumbleUp('the sun is so bright'));

// Filter range
let rangeArr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter((num) => num >= a && num <= b).sort((a, b) => a - b);
}

console.log(rangeArr);
console.log(filterRange(rangeArr, 1, 6));

// Filter range 'in place'
let newRangeArr = [5, 2, 9, 12, 4, 8];

function filterRangeInPlace(arr, a, b) {
    return arr.filter((num) => a <= num && b >= num);
}

console.log(filterRangeInPlace(newRangeArr, 1, 6)); // [ 5, 2, 4 ]