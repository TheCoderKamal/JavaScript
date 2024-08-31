let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let screen = document.getElementById('screen');

let seconds = 0;
let minutes = 0;
let milliseconds = 0;
let timer = null;

start.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds >= 100) {
                seconds++;
                milliseconds = 0;
            }
            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }
            screen.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
        }, 10);
    }
});

stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;  
});

reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;  
    seconds = 0;
    minutes = 0;
    milliseconds = 0;
    screen.innerText = '00:00:00';
});
