
export default function drawHome() {
    let content = document.querySelector("#content");
    content.innerHTML = '';

    let image = document.createElement("img");
    image.src = "./images/restaurant.jpg";

    let header = document.createElement("h1");
    header.textContent = "Awesome Restaurant Homepage!";

    let copy = document.createElement("p");
    copy.textContent = "Serving up only the finest javascript cuisine";

    content.appendChild(image);
    content.appendChild(header);
    content.appendChild(copy);
}