// Write your code here!
let main= document.getElementById('main')
main.remove();
let newHeader = document.createElement('h1');
newHeader.innerHTML= 'victory bahaa is the champion';
newHeader.setAttribute('id','victory')
document.getElementById('body').appendChild(newHeader);
// body.appendChild('newHeader');