export default function drawMenu() {
    let content = document.querySelector("#content");
    content.innerHTML = '';

    let header = document.createElement("h1");
    header.textContent = "Menu";

    content.appendChild(header);

    let list = document.createElement("ul");
    let item = document.createElement("li");
    item.textContent = "Smoked Salmon Carbonara with Lemon and Dill";
    list.appendChild(item);

    content.appendChild(list);
}