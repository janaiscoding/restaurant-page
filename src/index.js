import './style.css';
function test(){
console.log("This is a test.");
}
test();

// here I will add event listeners which will clear the entire content
// of the webpage, and replace it with the current clicked module
// for each tab: Home / Menu / Contact

function component() {
    const element = document.createElement('div');
    element.innerText = "This is a test."
    element.classList.add('test');
    return element;
} 
document.body.appendChild(component());