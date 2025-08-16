type Props = {
    valueInput: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: () => void
}

const Form = ({onChange,valueInput, onSubmit}: Props) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit()
    }
    
    return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={valueInput} onChange={onChange}/>
      <button type="submit">submit</button>
    </form>
    )
}

export default Form