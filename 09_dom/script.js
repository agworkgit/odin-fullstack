// Grabbing HTML elements
const main = document.getElementById('main');

// Creating HTML elements
const div = document.createElement('div');

// Attaching an element we created to a parent element
main.appendChild(div);
const p = document.createElement('p');
const text = `I'm coming from inside the JS script!`;

// Giving an element content
p.textContent = `${text}`;
div.appendChild(p);

// Setting an attribute
p.setAttribute('id', 'some-text');
// <p id="some-text">I'm coming from inside the JS script!</p>

// Remove elements
div.removeChild(p); // removes the p element from the DOM

// Altering elements
const p2 = document.createElement('p');
p2.textContent = 'A new paragraph element coming from JS, this time with additional style!';
// p2.setAttribute("style", "background: grey; padding: 1rem; font-size: 24px");
// p2.style.color = "red";
div.appendChild(p2);
div.classList.add("wrapper");

const btn = document.createElement('button');
btn.textContent = 'Press Me';
main.appendChild(btn);

btn.addEventListener('click', () => {
    console.log('I was clicked!');
    p2.classList.toggle("active");
});

// Working with keyboard events
const msg = document.createElement('input');
msg.setAttribute('id', 'message');
div.appendChild(msg);

const textBox = document.getElementById('message');

textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key},code=${event.code}`);
});

// Event delegation - setting event listener on parent and delegating events to children

// Instead of setting a listener on each child

// let home = document.querySelector('#home');
// home.addEventListener('click',(event) => {
//     console.log('Home menu item was clicked');
// });

// let dashboard = document.querySelector('#dashboard');
// dashboard.addEventListener('click',(event) => {
//     console.log('Dashboard menu item was clicked');
// });

// let report = document.querySelector('#report');
// report.addEventListener('click',(event) => {
//     console.log('Report menu item was clicked');
// });

// We can set one on the parent and use some branching to delegate the correct event to the correct child

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});