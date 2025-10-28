
let menuToggle = document.querySelector('.menu-toggle');
let navLinks = document.querySelector('.navigation-items');
let overlay = document.querySelector('.overlay-dropdown')
let navBar = document.querySelector('nav')

function dropDown() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    overlay.classList.toggle('active');
    navBar.classList.toggle("active");
}

menuToggle.addEventListener('click', dropDown);

