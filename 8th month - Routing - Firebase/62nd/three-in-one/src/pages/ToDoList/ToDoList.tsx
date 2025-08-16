import { useEffect, useState } from "react";
import style from "../../pages/ToDoList/ToDoList.module.css";
import AddTask from "../../components/AddTaskForm/AddTaskForm";
import TaskComponent from "../../components/TaskComponent/TaskComponent";
import { axiosOrder } from "../../axios/axiosOrder";

type Task = {
	id: string;
	text: string;
	done: boolean;
};

const ToDoList = () => {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState<Task[]>([]);

	const add = async () => {
		if (inputValue.trim() === "" || inputValue.trim().length === 1) return;

		try {
			const response = await axiosOrder.post("todos.json", {
				text: inputValue,
			});
			const newTask: Task = {
				id: response.data.name,
				text: inputValue,
				done: false,
			};
			setTasks((prev) => [...prev, newTask]);
			setInputValue("");
		} catch (err) {
			console.log(err + "addTodo");
		}
	};

	const deleteTask = async (id: string) => {
		try {
			await axiosOrder.delete(`todos/${id}.json`);
		} catch (err) {
			console.log(err + "deleteNote");
		}
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleTask = async (id: string) => {
		const current = tasks.find((task) => task.id === id);
		if (!current) return;
		try {
			await axiosOrder.patch(`todos/${id}.json`, { done: !current.done });
		} catch (error) {
			console.log(error);
		}
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id ? { ...task, done: !task.done } : task
			)
		);
	};

	const fetchBase = async () => {
		try {
			const response = await axiosOrder.get(
				"https://hw-62-318da-default-rtdb.firebaseio.com/todos.json"
			);
			const json = response.data;

			const data = Object.entries(json).map(([id, item]: [string, any]) => ({
				id,
				text: item.text,
				done: !!item.done,
			}));

			setTasks(data);
			console.log(data);
		} catch (err) {
			console.log(err + "fetch");
		}
	};

	useEffect(() => {
		fetchBase();
	}, []);

	return (
		<>
			<div className={style.container}>
				<AddTask
					inputValue={inputValue}
					add={add}
					setInputValue={setInputValue}
					placeholder="Add new task"
				/>
				{tasks.map((task) => (
					<TaskComponent
						key={task.id}
						task={task}
						onDelete={() => deleteTask(task.id)}
						onToggle={() => toggleTask(task.id)}
					/>
				))}
			</div>
		</>
	);
};

export default ToDoList;
