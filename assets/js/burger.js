const menu = document.querySelector('.header_block_menu_mobile');
const burger = document.querySelector('.header_block_menu_burger');
const cross = document.querySelector('.header_block_menu_close');

function openMobileMenu() {
    menu.classList.add('header_block_menu_mobile-active');
    burger.style.display = "none";
    cross.style.display = "block";
}

function closeMobileMenu() {
    menu.classList.remove('header_block_menu_mobile-active');
    burger.style.display = "block";
    cross.style.display = "none";
}