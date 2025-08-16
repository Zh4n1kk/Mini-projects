const followUserBtn = document.querySelector('#follow_user_btn');
const userFeed = document.querySelector('.user_feed');
const userName = document.querySelector('#user_name');
const msgInput = document.querySelector('#user_input');
const sendMsg = document.querySelector('#send_msg');
const editUser = document.querySelector('#edit-icon');

// MODAL WINDOW
const modalWrapper = document.querySelector('.modal_wrapper');
const modalBackground = document.querySelector('.modal_background');
const modalContent = document.querySelector('.modal_content_body');
const modalHeading = document.querySelector('.modal_heading');
const modalCross = document.querySelector('.modal_cross');

followUserBtn.addEventListener('click', () => {
    modalWrapper.style.display = 'block';
    modalHeading.innerText = 'Write email to sub'

    const div = document.createElement('div');
    div.setAttribute('class','user_edit_name')
    const p = document.createElement('p');
    p.innerText = 'Write email: ';
    const mailInput = document.createElement('input');
    mailInput.setAttribute('type', 'email');
    const subscribeButton = document.createElement('button');
    subscribeButton.innerText = 'Subscribe';

    div.appendChild(p)
    div.append(mailInput)
    modalContent.innerHTML = ''
    modalContent.appendChild(div)
    modalContent.appendChild(subscribeButton);

    subscribeButton.addEventListener('click', () => {
        if(!mailInput.value.includes('@')) {
            alert('Please enter a valid email');
            return;
        }
        subscribePost(mailInput.value)
        modalWrapper.style.display = 'none';
    })
})

const getProfile = async (mail) => {
    const response = await fetch(`http://146.185.154.90:8000/blog/zhanik@zhanik.com/profile`)
    const profile = await response.json()
    return profile
}

const getFeed = async () => {
    const response = await fetch(`http://146.185.154.90:8000/blog/zhanik@zhanik.com/posts`)
    const post = await response.json()
    return post
}

const subscribePost = async (targetEmail) => {
    try {
        const encodedMessageData = new URLSearchParams({email: targetEmail})

        const sub = await fetch(`http://146.185.154.90:8000/blog/zhanik@zhanik.com/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodedMessageData,
        })
        const result = await sub.json()
        return result
    } catch (err) {
        console.log(err)
    }
}

sendMsg.addEventListener('click', (event) => {
    event.preventDefault()
    createPost()
    msgInput.value = ''
})

const createPost = async () => {
    try {
        const encodedMessageData = new URLSearchParams({message: msgInput.value})

        const sub = await fetch(`http://146.185.154.90:8000/blog/zhanik@zhanik.com/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodedMessageData,
        })
    } catch (err) {
        console.log(err)
    }
}
document.addEventListener('DOMContentLoaded', async () => {
    updateFeed()
})

const updateFeed = async () => {
    const allFeed = await getFeed();
    const feed = allFeed.slice(-20).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    const profile = await getProfile();

    userName.innerHTML = `${profile.firstName} ${profile.lastName}`
    userFeed.innerHTML = ''
    Promise.all(feed.map(async (item) => {
        const post = document.createElement('div');
        post.classList.add('feed_post');
        post.innerHTML = `
                <p class="feed_name">${item.user.firstName} ${item.user.lastName} said:</p>
                <p class="feed_msg">${item.message}</p>
        `
        userFeed.append(post)
    }))
}

setInterval(updateFeed, 2000)

editUser.addEventListener('click', (event) => {
    modalContent.innerHTML = ''
    modalWrapper.style.display = 'block';
    modalHeading.innerText = 'Change info'

    const form = document.createElement('form');
    form.setAttribute('class', 'user_edit');

    const nameDiv = document.createElement('div');
    nameDiv.setAttribute('class', 'user_edit_name');
    const nameHint = document.createElement('p');
    nameHint.innerHTML = `Enter first name:`
    nameHint.setAttribute('class', 'name_hint');
    const firstName = document.createElement('input');
    firstName.setAttribute('placeholder', 'First name');

    nameDiv.append(nameHint);
    nameDiv.append(firstName);


    const lastNameDiv = document.createElement('div');
    lastNameDiv.setAttribute('class', 'user_edit_name');
    const lastNameHint = document.createElement('p');
    lastNameHint.setAttribute('class', 'name_hint');
    lastNameHint.innerHTML = `Enter last name:`
    const lastName = document.createElement('input');
    lastName.setAttribute('placeholder', 'Last name');

    lastNameDiv.appendChild(lastNameHint);
    lastNameDiv.append(lastName);

    const send = document.createElement('button');
    send.innerText = 'Submit';

    send.addEventListener('click', (event) => {
        if (lastName.value === '' || firstName.value === '') {
            event.preventDefault();
            alert(`Don't leave field empty!`);
            return;
        }
        event.preventDefault()
        editUserName(firstName.value, lastName.value);
        modalWrapper.style.display = 'none';
    })
    form.appendChild(nameDiv);
    form.appendChild(lastNameDiv);
    form.appendChild(send)
    modalContent.appendChild(form)
})

modalBackground.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
})

modalCross.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
})

const editUserName = async (name,lastName) => {
    try {
        const encodedMessageData = new URLSearchParams({firstName: name, lastName: lastName})

        const sub = await fetch(`http://146.185.154.90:8000/blog/zhanik@zhanik.com/profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: encodedMessageData,
        })
    } catch (err) {
        console.log(err)
    }
}
