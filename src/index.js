import loadHTML from "./loadpage";
import loadHome from "./pages/home";
import loadMenu from "./pages/menu";
import loadContact from "./pages/contact";
import "./style.css";

loadHTML();
loadHome();

// home tab
const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", () => {
  clearContentBox();
  loadHome();
});

// menu tab
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  clearContentBox();
  loadMenu();
});

// contact tab
const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", () => {
  clearContentBox();
  loadContact();
});

function clearContentBox() {
  const contentBox = document.querySelector(".content");
  contentBox.replaceChildren();
  return;
}