interface IProps {
  onSubmit: (event: React.SyntheticEvent<HTMLFormElement>) => void
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const FormTodo = ({ onSubmit, value, setValue }: IProps) => {
  return (
    <div className="app">
      <form className="inp-box">
        <input value={value} type="text" placeholder="Заметка" className="inp" />
        <button onSubmit={onSubmit} type="submit" className="btn-submit">
          Создать
        </button>
      </form>
    </div>
  )
}

export default FormTodo
