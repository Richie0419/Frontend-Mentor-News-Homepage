const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});