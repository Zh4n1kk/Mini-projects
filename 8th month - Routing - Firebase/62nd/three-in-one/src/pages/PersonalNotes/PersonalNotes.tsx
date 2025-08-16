import { useEffect, useState } from 'react'
import style from "../../pages/ToDoList/ToDoList.module.css";
import AddTask from '../../components/AddTaskForm/AddTaskForm'
import TextArea from '../../components/TextArea/TextArea';
import { axiosOrder } from '../../axios/axiosOrder';

type Task = {
    id: string
    text: string
}

const PersonalNotes = () => {
    const [inputValue, setInputValue] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])

    const add = async() => {
        if (inputValue.trim() === '' || inputValue.trim().length === 1) return

        try {
            const response = await axiosOrder.post('notes.json', {text: inputValue})
            const newTask: Task = {
                id: response.data.name,
                text: inputValue,
            }   
            setTasks(prev => [...prev, newTask])
            setInputValue('')
        } catch(err) {
            console.log(err + 'addNote')
        }
    }

    const deleteNote = async(id: string) => {
        try {
            await axiosOrder.delete(`notes/${id}.json`)
        } catch(err) {
            console.log(err + 'deleteNote')
        }
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const updateTaskText = async(id: string, newText: string) => {
        setTasks(prev => prev.map(task => task.id === id ? {...task, text: newText} : task))

        try {
            await axiosOrder.patch(`notes/${id}.json`, { text: newText })
        } catch(err) {
            console.log(err + 'updateTaskText')
        }
    }

        const fetchBase = async() => {
            try {
            const response = await axiosOrder.get('https://hw-62-318da-default-rtdb.firebaseio.com/notes.json')
            const json = response.data
            
            const data = Object.entries(json).map(([id,item]: [string, any]) => ({
                id,
                text: item.text
            }))

            setTasks(data)
            console.log(data)
        } catch(err) {
            console.log(err + 'fetch')
        }
        }

        useEffect(() => {
            fetchBase()
        }, [])

    return (
        <>
            <div className={style.container}>
                <AddTask 
                    inputValue={inputValue}
                    add={add}
                    setInputValue={setInputValue}
                    placeholder='Add new note'
                />
                {tasks.map(task => {
                    if (task.text.length === 0) {
                        return <></>
                    } else return (
                    <TextArea
                        key={task.id}
                        task={task}
                        onDelete={() => deleteNote(task.id)}
                        onUpdateTaskText={(id, newText) => updateTaskText(id, newText)}
                    />
                    )
            })
            }
            </div>        
        </>
    )
}

export default PersonalNotes