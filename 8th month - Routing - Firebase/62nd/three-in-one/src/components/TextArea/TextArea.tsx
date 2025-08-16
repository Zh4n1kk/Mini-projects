import { useEffect, useState } from "react";
import style from "../../pages/ToDoList/ToDoList.module.css";

type Task = {
    id: string
    text: string
}

type TaskProps = {
    task: Task
    onDelete: (id: string) => void
    onUpdateTaskText:(id: string, newText: string) => void
}

const TaskComponent = ({ task, onDelete, onUpdateTaskText }: TaskProps) => {
    const [value,setValue] = useState('')
    
    useEffect(() => {
        setValue(task.text)
    }, [task.text, onDelete])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const handleBlur = () => {
        if (value.trim() !== task.text) {
            onUpdateTaskText(task.id, value.trim())
        }
    }

    return (
        <div className={style.task}>
            <textarea value={value} onChange={handleChange} onBlur={handleBlur} />
            <div>
                <span className={style.cross} onClick={() => onDelete(task.id)}>X</span>
            </div>
        </div>
    )
}

export default TaskComponent