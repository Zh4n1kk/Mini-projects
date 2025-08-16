document.addEventListener("DOMContentLoaded", () => {
    const answers = document.getElementsByClassName('answer');
    const butt = document.getElementsByClassName('btn');

    const answerShowHide = (index) => {
        if (answers[index].style.display === 'none') {
            answers[index].style.display = 'block';
        } else if (answers[index].style.display === 'block') {
            answers[index].style.display = 'none';
        }
    };

    Array.from(butt).forEach((butt, index) => {
        butt.addEventListener('click', () => answerShowHide(index));
    });
});