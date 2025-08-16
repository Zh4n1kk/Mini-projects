document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('container')
    const start = document.getElementById('start')
    const stop = document.getElementById('stop')
    
    
    let interval = null;
    
    const addElem = () => {
        interval = setInterval(() => {
            const elem = document.createElement('div');
            elem.innerText = `${Math.floor(Math.random() * 20 + 1)}`;
            cont.append(elem);
        }, 1500);
    };
    
    const stopElem = () => {
        if (interval) { 
            clearInterval(interval); 
            interval = null; 
        }
    };
    
    start.addEventListener('click', addElem);
    stop.addEventListener('click', stopElem);
})
