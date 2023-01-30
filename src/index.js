console.log("This is a test.");

// here I will add event listeners which will clear the entire content
// of the webpage, and replace it with the current clicked module
// for each tab: Home / Menu / Contact

import './style.css';
import backgroundImage from './assets/test.jpg';

function component() {
    const element = document.createElement('div');
    element.classList.add('test');
    element.innerText = "This is a test."
    const myBackground = new Image();
    myBackground.src = backgroundImage;
    element.append(myBackground);
    return element;
  }
 
    document.body.appendChild(component());