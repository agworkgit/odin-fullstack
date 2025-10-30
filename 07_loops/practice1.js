// Calculating squares from 1-9

const results = [];

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.push(newResult);
    }
}

// calculate();
// console.log(results);

// Iterating through an array

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}

// Or with a classic for loop like so
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}