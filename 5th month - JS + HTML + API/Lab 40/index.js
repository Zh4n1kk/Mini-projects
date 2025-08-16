const userFeed = document.querySelector('.user_feed');
const msgInput = document.querySelector('#user_input');
const sendMsg = document.querySelector('#send_msg');
const userName_input = document.querySelector('#user_input_name');
const loader = document.querySelector('.loader');
loader.style.display = 'none';

const getFeed = async () => {
    const response = await fetch(`http://146.185.154.90:8000/messages`)
    const post = await response.json()
    return post
}

sendMsg.addEventListener('click', (event) => {
    event.preventDefault()
    if (userName_input.value === '' || msgInput.value === '') {
        console.log('empty')
        document.querySelector('#errMsg').style.display = 'block'
        return
    }
    document.querySelector('#errMsg').style.display = 'none'
    createPost()
    msgInput.value = ''
    userName_input.value = ''
})

const createPost = async () => {
    try {
        const encodedMessageData = new URLSearchParams({message: msgInput.value, author: userName_input.value})

        const sub = await fetch(`http://146.185.154.90:8000/messages`, {
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
    loader.style.display = 'inline-block'
    updateFeed()
})

let localDate;

const updateFeed = async () => {
    const allFeed = await getFeed();
    const feed = allFeed.slice(-20).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    let latestDate = feed[0].datetime

    if (localDate !== latestDate) {
        localDate = latestDate
        userFeed.innerHTML = ''
        Promise.all(feed.map(async (item) => {
            const post = document.createElement('div');
            post.classList.add('feed_post');
            const dateHour = JSON.stringify(new Date(item.datetime).getHours()).padStart(2, '0');
            const dateMinute = JSON.stringify(new Date(item.datetime).getMinutes()).padStart(2, '0');
            post.innerHTML = `
                <p class="feed_name">${item.author} said:</p>
                <p class="feed_msg">${item.message}</p>
                <p class="feed_time">${dateHour}:${dateMinute}</p>
        `
            userFeed.append(post)
        }))
        loader.style.display = 'none'
    } else {
        return;
    }
}

setInterval(updateFeed, 2000)