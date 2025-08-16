import style from "@/styles/Home.module.css";

type AddTaskProps = {
    inputValue: string
    add: () => void
    setInputValue: (value: string) => void
}

const addTask = ({ inputValue, add, setInputValue }: AddTaskProps) => {
    return (
        <>
            <div className={style.inputs}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add new task"
                ></input>
                <button onClick={add}>Add</button>
            </div>
        </>
    );
};

export default addTask
