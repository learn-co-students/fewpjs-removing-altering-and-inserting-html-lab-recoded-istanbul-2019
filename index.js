// Write your code here!

// Ask the DOM to find an HTML element or elements in the rendered page
// Remove or insert the selected element(s) and / or
// Adjust a property of the selected element(s)

// let main = document.querySelector('main');
// main.remove("main");

let body = document.querySelector('body')
body.removeChild(body.querySelector('main'));

let newHeader = document.createElement('h1');
newHeader.setAttribute("id","victory");

document.body.appendChild(newHeader);

let h1 = document.querySelector("h1#victory");
h1.innerHTML = 'ref is the champion'
