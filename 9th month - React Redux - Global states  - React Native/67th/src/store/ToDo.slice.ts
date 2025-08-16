import { todoApi } from "@/api/todoApi";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";
import { Task } from "@/types/Task";

type TInitState = {
	inputValue: string;
	tasks: Task[];
};

const initialState = {
	inputValue: "",
	tasks: [
		{
			id: '1',
			text: "Loading",
			done: false,
		},
	],
};

const namespace = "toDoSlice";
const toDoSlice = createSlice({
	name: namespace,
	initialState,
	reducers: {
		SetInputValue(state, action: PayloadAction<string>) {
			state.inputValue = action.payload;
		},
		deleteTask(state, action: PayloadAction<string>) {
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		},
		setTasks(state, action: PayloadAction<Task[]>) {
			state.tasks = action.payload;
		},
	},
});

export const add = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
	`${namespace}/addTask`,
	async (_, thunkAPI) => {
		const state = thunkAPI.getState() as { ToDo: TInitState };
		const dispatch = thunkAPI.dispatch;
		const inputValue = state.ToDo.inputValue;

		await todoApi.add(inputValue, dispatch);
	}
);

export const fetchBase = createAsyncThunk<void, void, {dispatch: AppDispatch}>(
    `${namespace}/fetchBase`,
    async(_, tApi) => {
        const dispatch = tApi.dispatch
        await todoApi.fetchBase(dispatch)
    }
)

export const toggleTaskFirebase = createAsyncThunk<void, {id: string; tasks: Task[]}, {dispatch: AppDispatch}>(
    `${namespace}/toggleTaskFirebase`,
    async({id, tasks},{ dispatch }) => {
        await todoApi.toggleTask(id, tasks, dispatch)
    }
)

export const deleteTaskFirebase = createAsyncThunk<void, {id: string, tasks: Task[]}, {dispatch: AppDispatch}>(
    `${namespace}/deleteTaskFirebase`,
    async({id,tasks}, {dispatch}) => {
        await todoApi.deleteTask(id,tasks, dispatch)
    }
)

export const { SetInputValue, deleteTask, setTasks } =
	toDoSlice.actions;
export default toDoSlice.reducer;
