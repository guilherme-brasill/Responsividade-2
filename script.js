const menuHamburger = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');

menuHamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

