const HTMLbody = document.querySelector("body");

export default function loadHTML(){

    const header = document.createElement("header");
    const nav = document.createElement("nav");
    header.textContent = "Fancy Pizza";

    const homeButton = document.createElement("button");
    homeButton.classList.add("home-button");
    homeButton.innerText = "Home";

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.innerText = "Menu";

    const contactButton = document.createElement("button");
    contactButton.classList.add("contact-button");
    contactButton.innerText = "Contact";

    nav.append(homeButton,menuButton,contactButton);

    HTMLbody.insertAdjacentElement("afterbegin", header);
    header.append(nav);
}