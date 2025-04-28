const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const body = document.body;

menuToggle.addEventListener('click', () => {
    navLinks.classList.add('open');
    body.classList.add('menu-open');
});

closeBtn.addEventListener('click', () => {
    navLinks.classList.remove('open');
    body.classList.remove('menu-open');
});

overlay.addEventListener('click', () => {
    navLinks.classList.remove('open');
    body.classList.remove('menu-open');
});