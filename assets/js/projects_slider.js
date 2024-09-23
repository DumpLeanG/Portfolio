const sliderDots = document.querySelectorAll('.projects_slider_dot');
const sliderLine = document.querySelector('.projects_block');

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const activeDot = document.querySelector('.projects_slider_dot.active_dot');
        activeDot.classList.remove('active_dot');
        dot.classList.add('active_dot');
        sliderLine.style.left = -document.documentElement.scrollWidth*index + 'px';
    });
});