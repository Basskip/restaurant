import drawHome from './homepage.js';
import drawContact from './contact.js';
import drawMenu from './menu.js';

drawHome();

const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', () => {
    drawHome();
    clearActive();
    homeButton.classList.add("active");
});

const contactButton = document.getElementById('contact-button');

contactButton.addEventListener('click', () => {
    drawContact();
    clearActive();
    contactButton.classList.add("active");
});

const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', () => {
    drawMenu();
    clearActive();
    menuButton.classList.add("active");
});

function clearActive() {
    let navItems = document.querySelector("nav").children;

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
    }
}