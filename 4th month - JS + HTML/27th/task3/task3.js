let sec_firstnum = 0;  // Десятки секунд
let sec_secondnum = 0; // Единицы секунд
let min_firstnum = 0;  // Десятки минут
let min_secondnum = 0; // Единицы минут
let ourTimer = null;

const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

const updateTime = () => {
    minutes.textContent = `${min_firstnum}${min_secondnum}`;
    seconds.textContent = `${sec_firstnum}${sec_secondnum}`;
};

const timer = () => { 
    if (!ourTimer) {
        ourTimer = setInterval(() => {
            sec_secondnum++; 

            if (sec_secondnum > 9) {
                sec_secondnum = 0;
                sec_firstnum++; 
            }

            if (sec_firstnum > 5) { 
                sec_firstnum = 0;
                sec_secondnum = 0;
                min_secondnum++; 
            }

            if (min_secondnum > 9) {
                min_secondnum = 0;
                min_firstnum++; 
            }

            updateTime();
        }, 1000);
    }
};

const pauseTimer = () => {
    clearInterval(ourTimer);
    ourTimer = null;
};

const resetTimer = () => {
    clearInterval(ourTimer);
    ourTimer = null;
    sec_firstnum = 0;
    sec_secondnum = 0;
    min_firstnum = 0;
    min_secondnum = 0;
    updateTime();
};

start.addEventListener('click', timer);
pause.addEventListener('click', pauseTimer);
reset.addEventListener('click', resetTimer);