// Write your code here!

document.querySelector("main").remove();
let newHeader = document.createElement("h1");
newHeader.id="victory";
document.body.appendChild(newHeader);

// let newHeader = document.querySelector("h1#victor");

newHeader.innerHTML = "YOUR-NAME is the champion";

