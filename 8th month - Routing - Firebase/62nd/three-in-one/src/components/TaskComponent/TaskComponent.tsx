import style from "../../pages/ToDoList/ToDoList.module.css";

type Task = {
	id: string;
	text: string;
	done: boolean;
};

type TaskProps = {
	task: Task;
	onDelete: () => void;
	onToggle: () => void;
};

const TaskComponent = ({ task, onDelete, onToggle }: TaskProps) => {
	return (
		<div className={style.task}>
			<p style={{ textDecoration: task.done ? "line-through" : "none" }}>
				{task.text}
			</p>
			<div>
				<input
					type="checkbox"
					checked={task.done}
					onChange={() => onToggle()}
				/>
				<span className={style.cross} onClick={() => onDelete()}>
					X
				</span>
			</div>
		</div>
	);
};

export default TaskComponent;
