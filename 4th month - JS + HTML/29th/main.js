const loginContainer = document.getElementById('login');
const loginInput = document.getElementById('login-input');
const loginBtn = document.getElementById('login-btn');
const logout = document.getElementById('logout')

const content = document.querySelector('.content');
const note = document.getElementById('notes');
const save  = document.getElementById('sav');
const reset = document.getElementById('res');

let currentUser;

loginBtn.addEventListener('click', () => {
        currentUser = loginInput.value.trim();
        loginContainer.style.display = 'none';
        content.style.display = 'flex';
        note.value = localStorage.getItem(`text_${currentUser}`)
});

logout.addEventListener('click', () => {
    localStorage.setItem(`text_${currentUser}`, note.value);
    note.value = '';
    currentUser = "";
    loginInput.value = "";
    content.style.display = 'none';
    loginContainer.style.display = 'flex';
})

save.addEventListener('click', () => {
    localStorage.setItem(`text_${currentUser}`, note.value)
});
reset.addEventListener('click', () => {
    note.value = '';  
    localStorage.setItem(`text_${currentUser}`, '')
});
