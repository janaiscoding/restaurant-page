export default loadHeader(){
    const header = document.createElement("header");

    const container = document.createElement("div");
    container.classList.add("header-container");
    header.appendChild(container);

    const restaurantName = document.createElement("h1");
    container.appendChild(restaurantName);
}
