// Write your code here


let main = document.querySelector('main#main');
main.remove();
let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = '<h1>Oktay is the champion</h1>';
