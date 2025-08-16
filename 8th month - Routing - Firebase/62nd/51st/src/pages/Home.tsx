'use client'

import { useState } from 'react'
import style from "@/styles/Home.module.css";
import AddTask from '@/components/AddTaskForm/AddTaskForm'
import TaskComponent from '@/components/Task/Task'

type Task = {
    id: number
    text: string
    done: boolean
}

const Home = () => {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: 'Всем привет! я сделал этот планировщик задач используя next + css + react', done: false },
        { id: 2, text: 'Делать id для заранее созданных элементов было крайне неприятно на ощущения ведь там у нас идет 1,2,3 а затем Date.now', done: false },
        { id: 3, text: 'Еще мне очень не нравится как нам приходится ко всему присваивать типы, я прочувствовал ужасную боль используя React, надеюсь когда-нибудь привыкну ведь как так вообще можно, сначала TypeScript был окей, но теперь делать тип просто как тип, а затем тип чтобы сам ТС не ругался', done: false },
        { id: 4, text: 'А удаление и перечеркивание вызвало такую боль внутри меня ведь "Реакт же не поймет","Реакт тут не сможет догадаться","Реакт сломается если сделать так", передайте реакту что я ему бошку сломать хочу, все халас)', done: false },
        { id: 5, text: '«И невозможное возможно, дорогу осилит идущий.» — Борис Пастернак', done: false }
        
    ])

    const add = () => {
        if (inputValue.trim() === '' || inputValue.trim().length === 1) return
        const newTask: Task = {
            id: Date.now(),
            text: inputValue,
            done: false
        }   
        setTasks([...tasks, newTask])
        setInputValue('')
    }

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task
        ))
    }

    return (
        <>
            <div className={style.container}>
                <AddTask 
                    inputValue={inputValue}
                    add={add}
                    setInputValue={setInputValue}
                />
                {tasks.map(task => (
                    <TaskComponent
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onToggle={toggleTask}
                    />
                ))}
            </div>        
        </>
    )
}

export default Home