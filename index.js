// Write your code here!
main.remove();

// let header = document.getElementById ("div#victory");
// header.innerHTML = "<h1>Kamal is the champion/<h1>";

// let element = document.querySelector("h1#victory");
// element.innerHTML= 'Kamal is the champion';

// let newHeader = new header();
// newHeader.append('Kamal is the champion');

let header = document.querySelector("#main");
let newHeader = document.createElement ("h1")
newHeader.setAttribute("id","victory");
newHeader.innerHTML = "kamal is the champion";


