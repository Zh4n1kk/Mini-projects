const calendarInput = document.getElementById("calendar");
const calendarWindow = document.getElementById('calendarWindow')
const calendarMonthElem = document.querySelector(".calendar_month");
const dayButtons = document.querySelectorAll(".calendar_number button");


dayButtons.forEach((button) => {
    button.addEventListener("click", function () {
        dayButtons.forEach(btn => btn.style.backgroundColor = '')
        button.style.backgroundColor = '#7d7d7d'
        let day = button.textContent.trim();
        if (day.length === 1) {
            day = "0" + day;
        }
        const dateStr = `2024-02-${day}`;
        calendarInput.value = dateStr;
    });
});

calendarInput.addEventListener("click", function(event) {
    calendarWindow.style.display = "block";
});

document.addEventListener("click", function(event) {
    if (!calendarWindow.contains(event.target) && event.target !== calendarInput) {
        calendarWindow.style.display = "none";
    }
});
