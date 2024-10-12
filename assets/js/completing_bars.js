const cssBar = document.getElementById('css_bar');
const htmlBar = document.getElementById('html_bar');
const jsBar = document.getElementById('js_bar');
const reactBar = document.getElementById('react_bar');
const nodeBar = document.getElementById('node_bar');
const phpBar = document.getElementById('php_bar');
const figmaBar = document.getElementById('figma_bar');
const illustratorBar = document.getElementById('illustrator_bar');

window.addEventListener('scroll', () => {
    if(scrollY > document.documentElement.clientHeight * 0.5) {
        cssBar.style.width = '62%';
        htmlBar.style.width = '77%';
        jsBar.style.width = '62%';
        reactBar.style.width = '13%';
        nodeBar.style.width = '13%';
        phpBar.style.width = '13%';
        figmaBar.style.width = '34%';
        illustratorBar.style.width = '34%';
    }
});