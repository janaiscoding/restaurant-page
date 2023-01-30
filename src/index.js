import loadHTML from "./modules/loadpage";
import loadHome from "./modules/home";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";
import './style.css';

//initial load
console.log("This is a test.");
loadHTML();
loadHome();

// JS logic 
// home tab 
const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
    clearContent();
    loadHome();
});

//menu tab
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
    clearContent();
    loadMenu();
});

//contact tab 
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", () => {
    clearContent();
    loadContact();
});

//cleaning the selected tab
function clearContent() {
    const contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();
    return;
}