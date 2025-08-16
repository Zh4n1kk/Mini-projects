import { useState } from "react"
import FormTodo from "./components/FormTodo"

const App = () => {
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState<string[]>([])

  const onSubmtHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (value) {
      setTodo((prevState) => [...prevState, value])
    }
  }

  return (
    <div className="app">
      <h1>Мои заметки</h1>
      <FormTodo onSubmit={onSubmtHandler} setValue={setValue} value={value}></FormTodo>
    </div>
  )
}

export default App