export default function drawContact() {
    let content = document.querySelector("#content");
    content.innerHTML = '';

    let header = document.createElement("h1");
    header.textContent = "Contact Page";

    content.appendChild(header);
}