import style from "@/styles/Home.module.css";
import { Task } from "@/types/Task";

type TaskProps = {
    task: Task
    onDelete: (id: string) => void
    onToggle: (id: string) => void
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