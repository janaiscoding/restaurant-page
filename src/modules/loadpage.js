const HTMLbody = document.querySelector("body");

export default function loadHTML(){

    const header = document.createElement("header");
    
    const headerWrapper = document.createElement("div");
    headerWrapper.classList.add("header-wrapper");

    const websiteName = document.createElement("h1");
    websiteName.innerText = "Sooshi Restaurant";

    const logo = document.createElement("img");
    logo.id = "logo";
    logo.src = "./assets/images/logo.src";
    logo.alt = "Sooshi Restaurant Logo";
    
    const nav = document.createElement("nav");

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

    headerWrapper.append(websiteName, logo, nav);
    header.append(headerWrapper);
}