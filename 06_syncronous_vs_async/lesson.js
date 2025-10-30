// --- Syncronous code ---
// The default way JS likes to run code
// Meaning line by line like so:

const log = (...vals) => console.log(vals);

let a;
a = (function () { return 50; })();
let b;
b = (function () { return 22; })();

log(a, b); // [50, 22]

// As you can see, every line executes before moving to the next

// --- Asyncronous code ---
// Examples include: setTimeout, callbacks for geolocation, Promises, fetch, ajax, filesystem interaction, database calls, even DOM event listeners
// In all of these cases, when JS reaches the line the result won't be instantaneous so it needs to know what to do until that value comes back, if the next line needs that value JS won't know how to proceed

// Timeout
let a3 = 100;
// async code - it's set aside
setTimeout(function () { a3++; log(a3); }, 1); // 1ms later
// moves on to this, then goes back and logs a3 from timeout
log(a3); // 100

// Promises
let p = new Promise(function (resolve, reject) {
    resolve("Yo!");
});
log(p); // [ Promise { <pending> } ] - in the future there's a value coming back
// Value comes back now: [ Promise { 'Yo!' } ]

// Keep in mind async means results coming in the future
// The .then method will run (return a value) once the promise above gets resolved
p.then((val) => {
    log(val);
});