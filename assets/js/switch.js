const switchElements = document.querySelectorAll('.switch_block_element');
const switchBorder = document.querySelector('.switch_block_border');
const switchTogglers = document.querySelectorAll('a[href^="#"]');

function switchFunc (switchElements) {
    for(let i = 0; i < switchElements.length; i++) {
        if(scrollY > document.documentElement.clientHeight * (i-0.5) && scrollY < document.documentElement.clientHeight * (i+0.5)) {
            var j = 0;
            while (j <= i) {
                switchElements[j++].classList.add('active_element');
            }
            switchBorder.style.height = 52*(i+1) + 'px';
            var k = i+1;
            while (k < switchElements.length) {
                switchElements[k++].classList.remove('active_element');
            }
        }
    }
}

switchFunc(switchElements);
window.addEventListener('scroll', () => {
    switchFunc(switchElements);
});

/*for(let i = 0; i < switchTogglers.length; i++) {
    switchTogglers[i].onclick = () => {
        for (let j = 0; j < switchElements.length; j++) {
            if(switchElements[j].getAttribute('href') === switchTogglers[i].getAttribute('href')) {
                switchElements[j].click();
            }
        }
    }
}

for(let i = 0; i < switchElements.length; i++) {
    switchElements[i].onclick = () => {
        var j = 0;
        while (j <= i) {
            switchElements[j++].classList.add('active_element');
        }
        switchBorder.style.height = 52*(i+1) + 'px';
        var k = i+1;
        while (k < switchElements.length) {
            switchElements[k++].classList.remove('active_element');
        }
    }
}*/