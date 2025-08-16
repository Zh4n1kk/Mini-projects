import style from "../../pages/ToDoList/ToDoList.module.css";

type AddTaskProps = {
    inputValue: string
    add: () => void
    setInputValue: (value: string) => void
    placeholder: string
}

const addTask = ({ inputValue, add, setInputValue, placeholder }: AddTaskProps) => {
    return (
        <>
            <div className={style.inputs}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={placeholder}
                ></input>
                <button onClick={add}>Add</button>
            </div>
        </>
    );
};

export default addTask
