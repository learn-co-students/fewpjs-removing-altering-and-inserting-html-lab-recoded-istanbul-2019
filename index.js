// Write your code here!
document.querySelector('main#main').remove(); //to remove the main 

let newHeader = document.createElement('h1'); //to create a h1 element

newHeader.setAttribute('id', 'victory');     //to give an id attribute to the h1 element with 'victory'

newHeader.innerHTML = 'iHakan is the champion'; //to add the message inside the h1 tag

document.body.appendChild('newHeader');     //to see it on the DOM