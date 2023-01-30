console.log("This is a test.");
const mainDiv = document.querySelector("#content");
// here I will add event listeners which will clear the entire content
// of the webpage, and replace it with the current clicked module
// for each tab: Home / Menu / Contact

import './style.css';

function component() {
    const element = document.createElement('div');
    element.classList.add('test');
    element.innerText = "This is a test."
    return element;
  }
 
    mainDiv.appendChild(component());