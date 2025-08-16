const taskInput = document.querySelector('input');
const toDoBtn = document.querySelector('button');
const tasks_info = document.querySelector('.tasks_info')
const info_todo = document.getElementById('info_toDo')
const info_InProg = document.getElementById('info_InProgress')
const info_done = document.getElementById('info_done')

function saveTask() {
    localStorage.setItem('toDo', info_todo.innerHTML)
    localStorage.setItem('inProg', info_InProg.innerHTML)
    localStorage.setItem('done', info_done.innerHTML)
}
function loadTasks() {
    info_todo.innerHTML = localStorage.getItem('toDo')
    info_InProg.innerHTML = localStorage.getItem('inProg')
    info_done.innerHTML = localStorage.getItem('done')

    // After loading data from localstorage we have to make all functions work again... sadly

    // This is for remove button in done
    document.querySelectorAll('#info_done button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.parentElement.remove()
            saveTask()
        })
    })

    // this is for done button for tasks in progress
    document.querySelectorAll('.taskItem button').forEach(button => {
        if (button.textContent === 'In Progress >') {
            button.addEventListener('click', (e) => {
                moveToInProg(e.target.parentElement)
                console.log('clicked progress')
            })
        } else if (button.textContent === 'Done') {
            button.addEventListener('click', (e) => {
                moveToDone(e.target.parentElement)
                console.log('clicked done')
            })
        }
    })

    document.querySelectorAll('#info_InProgress button').forEach(button => {
        button.addEventListener('click', (e) => {
            moveToDone(e.target.parentElement)
        })
    })
    // this is for cross to remove task
    document.querySelectorAll('.taskItem span').forEach(span => {
        span.addEventListener('click', (e) => {
            e.target.parentElement.remove();
            saveTask()
        })
    })

    // this is for input that've changed and we have to save it again becuz it was written in a submit function :(
    document.querySelectorAll('p ').forEach(paragraph => {
        paragraph.addEventListener('input', () => {
            saveTask()
        })
    })

    document.querySelectorAll('#info_done p').forEach(p => {
        p.setAttribute('contenteditable', 'false');
    })

}

toDoBtn.addEventListener("click", () => {
    if (taskInput.value.trim() === '') {
        alert(`Input task correctly!`)
        return;
    }

    const task = document.createElement('div');
    task.classList.add('taskItem');
    const p = document.createElement('p');
    p.setAttribute('contenteditable', 'true');
    p.innerText = taskInput.value;
    taskInput.value = '';
    p.addEventListener('input', () => {
        saveTask();
    })

    const crossSymbol = document.createElement('span');
    crossSymbol.innerText = 'X'
    crossSymbol.style.color = 'red'
    crossSymbol.addEventListener('click', () => {
        task.remove()
        saveTask();
    })

    const inProgressButton = document.createElement('button');
    inProgressButton.innerText = 'In Progress >';
    task.appendChild(p);
    task.appendChild(inProgressButton);
    task.appendChild(crossSymbol);
    info_todo.appendChild(task)

    saveTask()
    // IN PROGRESS
    inProgressButton.addEventListener('click', () => {
        task.remove();
        crossSymbol.remove();
        inProgressButton.remove();

        const doneButton = document.createElement('button');
        doneButton.innerText = 'Done';
        p.addEventListener('input', () => {
            saveTask()
        })

        const doneCross = document.createElement('span');
        doneCross.innerText = 'X'
        doneCross.style.color = 'red'
        doneCross.addEventListener('click', () => {
            task.remove()
            saveTask();
        })

        task.appendChild(doneButton);
        task.appendChild(doneCross);
        info_InProg.appendChild(task)
        saveTask()

        doneButton.addEventListener('click', () => {
            task.remove();
            doneCross.remove();
            doneButton.remove();
            p.setAttribute('contenteditable', 'false');
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Remove';
            task.appendChild(removeButton);
            info_done.appendChild(task)
            saveTask()

            removeButton.addEventListener('click', () => {
                task.remove();
                saveTask()
            })
        })
    })
})

loadTasks()

function moveToInProg(task) {
    task.querySelector('button').remove()
    task.querySelector('span').remove()

    const doneButton = document.createElement('button');
    doneButton.innerText = 'Done';
    doneButton.addEventListener('click', () => {moveToDone(task)})

    const doneCross = document.createElement('span');
    doneCross.innerText = 'X'
    doneCross.style.color = 'red'
    doneCross.addEventListener('click', () => {
        task.remove()
        saveTask();
    })

    task.appendChild(doneButton);
    task.appendChild(doneCross);
    info_InProg.appendChild(task)
    saveTask()
}

function moveToDone(task) {
    task.querySelector('button').remove()
    task.querySelector('span').remove()
    document.querySelector('#info_InProgress p').setAttribute('contenteditable', 'false');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    task.appendChild(removeButton);
    info_done.appendChild(task)
    saveTask()

    removeButton.addEventListener('click', () => {
        task.remove();
        saveTask()
    })
}

