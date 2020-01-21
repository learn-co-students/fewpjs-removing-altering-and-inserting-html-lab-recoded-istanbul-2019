// Write your code here!
main.remove();

let h1 = document.createElement('h1')
h1.id="victory";
document.body.appendChild(h1);

let newHeader = document.querySelector("h1#victory");
newHeader.innerHTML = "YOUR-NAME is the champion";