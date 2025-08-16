import { axiosInstance } from "@/axios/axiosInstance";
import { AppDispatch } from "@/store/store";
import { SetInputValue, setTasks } from "@/store/ToDo.slice";
import { Task } from "@/types/Task";
import { AxiosInstance } from "axios";

class ToDoApi {
	instance: AxiosInstance = axiosInstance;

	add = async (inputValue: string, dispatch: AppDispatch) => {
		if (inputValue.trim() === "" || inputValue.trim().length === 1) return;

		try {
			const response = await this.instance.post("todos.json", {
				text: inputValue,
                done: false,
			});
			const newTask: Task = {
				id: response.data.name,
				text: inputValue,
				done: false,
			};
			dispatch(SetInputValue(""));
			await this.fetchBase(dispatch);
		} catch (err) {
			console.log(err + "addTodoFirebase");
		}
	};

		deleteTask = async (id: string, tasks: Task[], dispatch: AppDispatch) => {
		try {
			await this.instance.delete(`todos/${id}.json`);
		} catch (err) {
			console.log(err + "deleteNote");
		}
        const updatedTask = tasks.filter((task) => task.id !== id)
		dispatch(setTasks(updatedTask));
	};

	    toggleTask = async (id: string, tasks: Task[], dispatch: AppDispatch) => {
		const current = tasks.find((task) => task.id === id);
		if (!current) return;
		try {
			await this.instance.patch(`todos/${id}.json`, { done: !current.done });
		} catch (error) {
			console.log(error);
		} 
        const updatedTask = tasks.map((task) => task.id === id ? {...task, done: !task.done} : task)
            dispatch(setTasks(updatedTask));
	};

	fetchBase = async (dispatch: AppDispatch) => {
		try {
			const response = await this.instance.get("todos.json");
			const json = response.data;

			const data = Object.entries(json).map(([id, item]: [string, any]) => ({
				id,
				text: item.text,
				done: !!item.done,
			}));

			dispatch(setTasks(data));
		} catch (err) {
			console.log(err + "fetch");
		}
	};
}

export const todoApi = new ToDoApi();
