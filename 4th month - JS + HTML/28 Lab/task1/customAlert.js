const alertBox = $('#alertBox');       
const callAlert = $('.callAlert');       
const alertBtn = $('.alert_btn')

callAlert.on('click', () => {
    if (alertBox.css('display') === 'none') {
        alertBox.css('display', 'flex');
    }
});

alertBtn.on('click', () => {
    if (alertBox.css('display') === 'flex') {
        alertBox.css('display', 'none');
    }
});

alertBox.on('click', function (event) {
    if(event.target === this) {
        alertBox.css('display', 'none');
    }
})