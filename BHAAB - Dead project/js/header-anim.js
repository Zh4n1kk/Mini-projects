document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const opener = document.querySelector('.bhaab-opener');
        const openerHeight = opener.offsetHeight;
    
        const headerNav = document.querySelector('.header_nav');
        const headerLogo = document.querySelector('.header b');
    
        if (scrollY > openerHeight) {
            headerNav.classList.add('animate-in');
            headerLogo.classList.add('animate-in');
        } else {
            headerNav.classList.remove('animate-in');
            headerLogo.classList.remove('animate-in');
        }

        const headerTextColor = document.querySelector('.header b')
        const headerNavColor = document.querySelectorAll('.header_nav a')
        if (scrollY < 1663) {
            headerTextColor.style.color = 'black';
            headerNavColor.forEach(element => element.style.color = 'black');
        } else if (scrollY >= 1663 && scrollY < 2814) {
            headerTextColor.style.color = 'white';
            headerNavColor.forEach(element => element.style.color = 'white');
        } else if (scrollY >= 2814) {
            headerTextColor.style.color = 'black';
            headerNavColor.forEach(element => element.style.color = 'black');
        }
    });
})
