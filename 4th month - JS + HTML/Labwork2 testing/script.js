const inputCountry = document.getElementById("country");
const inputDate = document.querySelector(".input_date");
const inputMessage = document.querySelector(".input_message input");

const submitButton = document.querySelector(".input_message button");
const messagesCont = document.getElementById("messages_container");

let countPost = JSON.parse(localStorage.getItem("countPost")) || 1;
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePost() {
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("countPost", JSON.stringify(countPost));
}

function displayPosts() {
    messagesCont.innerHTML = "";
    posts.forEach((post, index) => {
        const messageDiv = document.createElement('div');

        const message_head = document.createElement('div');
        message_head.innerText = `Post #${post.id} at ${post.date} being in: ${post.country}`;

        const message_body = document.createElement('div');
        message_body.classList.add('message_body');
        const userMessage = document.createElement('p');
        userMessage.innerText = post.message;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Remove';
        deleteButton.classList.add('delete_button');

        deleteButton.addEventListener('click', () => {
                posts.splice(index, 1);
                countPost--
                savePost();
                displayPosts();
        });

        message_body.append(userMessage);
        messageDiv.append(message_head);
        message_head.classList.add('message_head');
        messageDiv.append(message_body);
        messageDiv.append(deleteButton);
        messagesCont.append(messageDiv);
    });
}

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (inputCountry.value === "" || inputDate.value === "" || inputMessage.value === "") {
        alert('Please fill out all fields');
        return;
    }

    const newPost = {
        id: countPost,
        country: inputCountry.value,
        date: inputDate.value,
        message: inputMessage.value,
    };

    countPost++;
    posts.push(newPost);
    savePost();
    displayPosts();

    inputMessage.value = '';
    inputDate.value = '';
    inputCountry.value = '';
});

const restcountries = new XMLHttpRequest();
restcountries.open("GET", "https://restcountries.com/v3.1/all?fields=name");
restcountries.send();
restcountries.onload = () => {
    const countries = JSON.parse(restcountries.responseText);
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common)).forEach((country) => {
        const option = document.createElement("option");
        option.innerText = country.name.common;
        inputCountry.append(option);
    });
};

displayPosts();