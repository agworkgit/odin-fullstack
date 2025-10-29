// Declaring variables

let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Re-assign variables

let age = 11;
age = 54;
console.log(age);

// Constants

const pi = 3.14;
// TypeError: Assignment to constant variable.
// pi = 10;
// console.log(pi); 

// Variables declared with `var` can be found in legacy code but are no longer in circulation

// Assignment

console.log(50 + 32);
console.log(50 + 32 + 12 + 54 + 3 + 7);
console.log((4 + 6 + 9) / 77);

let a = 10;
console.log(a); // 10
a = 20;
console.log(a); // 20

let b = 7 * a;
console.log(b); // 140

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(max, actual, percentage);
// 57, 44, 0.7719...

let c = 1, d = 1;
let e = ++c; // prefix form returns the new value
let f = d++; // postfix form returns the old value
console.log(c, d, e, f); // 2 2 2 1

