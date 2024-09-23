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
        cssBar.style.width = '360px';
        htmlBar.style.width = '443px';
        jsBar.style.width = '360px';
        reactBar.style.width = '73px';
        nodeBar.style.width = '73px';
        phpBar.style.width = '73px';
        figmaBar.style.width = '197px';
        illustratorBar.style.width = '197px';
    }
});