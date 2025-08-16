const nameInput = document.querySelector('input[name=username]')
const passInput = document.querySelector('input[ name = password]')
const login = document.getElementById('login')
const form = document.querySelector('form')

    function toggleButton() {
        if (nameInput.value.trim().length >= 6 && passInput.value.trim().length >= 6) {
            login.removeAttribute('disabled');
        } else {
            login.setAttribute('disabled', true);
        }
    }

    nameInput.addEventListener('keyup', toggleButton);
    passInput.addEventListener('keyup', toggleButton);

    form.addEventListener('submit', (event) => {
        event.preventDefault()
    });