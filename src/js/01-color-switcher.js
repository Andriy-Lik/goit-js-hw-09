const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    bodyBgc: document.querySelector('body'),
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

function onStartClick() {
    timerId = setInterval(() => {
        refs.bodyBgc.style.backgroundColor = getRandomHexColor();   
    }, 1000);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
}

function onStopClick() {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
}

refs.btnStart.addEventListener('click', onStartClick);
refs.btnStop.addEventListener('click', onStopClick);


