import style from "@/styles/Home.module.css";

type Task = {
    id: number
    text: string
    done: boolean
}

type TaskProps = {
    task: Task
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

const TaskComponent = ({ task, onDelete, onToggle }: TaskProps) => {
    return (
        <div className={style.task}>
            <p style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                {task.text}
            </p>
            <div>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => onToggle(task.id)}
                />
                <span className={style.cross} onClick={() => onDelete(task.id)}>X</span>
            </div>
        </div>
    )
}

export default TaskComponent