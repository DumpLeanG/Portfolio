const menu = document.querySelector('.header_block_menu_mobile');
const burger = document.querySelector('.header_block_menu_burger');
const cross = document.querySelector('.header_block_menu_close');
const logo = document.querySelector('.header_block_menu_logo');

addEventListener("resize", function () {
    if(window.matchMedia("(max-width: 767px)").matches) {
        logo.addEventListener("click", closeMobileMenu);
        burger.style.display="block";
    } else {
        logo.removeEventListener("click", closeMobileMenu);
        burger.style.display="none";
        cross.style.display = "none";
        menu.classList.remove('header_block_menu_mobile-active');
    }
});

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