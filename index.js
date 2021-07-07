// Write your code here!

//add h1 with victory id
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
let h1 = document.createElement('h1');
newHeader.appendChild(h1);
h1.innerHTML= "Elif is the champion"
// add id
document.getElementsByTagName("h1")[0].setAttribute("id", "victory");

//removes main #main
var element = document.getElementById('main');
document.body.remove("main");