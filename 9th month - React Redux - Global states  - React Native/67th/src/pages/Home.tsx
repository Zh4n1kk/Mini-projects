"use client";

import { useEffect } from "react";
import style from "@/styles/Home.module.css";
import AddTask from "@/components/AddTaskForm/AddTaskForm";
import TaskComponent from "@/components/Task/Task";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
	add,
	deleteTaskFirebase,
	fetchBase,
	SetInputValue,
    toggleTaskFirebase,
} from "@/store/ToDo.slice";

const Home = () => {
	const { inputValue, tasks } = useAppSelector((state) => state.ToDo);
	const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBase())
    },[])
	return (
		<>
			<div className={style.container}>
				<AddTask
					inputValue={inputValue}
					add={() => dispatch(add())}
					setInputValue={(e: string) => dispatch(SetInputValue(e))}
				/>
				{tasks.map((el) => (
					<TaskComponent
						key={el.id}
						task={el}
						onDelete={() => dispatch(deleteTaskFirebase({id: el.id, tasks}))}
						onToggle={() => dispatch(toggleTaskFirebase({id: el.id, tasks}))}
					/>
				))}
			</div>
		</>
	);
};

export default Home;
