
// Write your code here!

document.body.remove(main);  // Remove main from the document body

let newHeader = document.createElement('h1'); // Create the h1 element 

newHeader.id = "victory"; // Add Id to h1

newHeader.innerHTML = "YOUR-NAME is the champion"; //Add Elements to the DOM via innerHTML


// Create a text element 
// let newHeaderText = document.createTextNode("YOUR-NAME is the champion"); 

// Append the text node to the h1 element 
// newHeader.appendChild(newHeaderText);

// Append the h1 element to the document body 
//document.body.appendChild(newHeader);