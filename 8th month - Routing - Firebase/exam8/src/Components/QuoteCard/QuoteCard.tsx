import './QuoteCard.css'

type Props = {
    author: string
    quote: string
    editBtn: () => void
    deleteBtn: () => void
}

const QuoteCard = ({author, quote, editBtn, deleteBtn}: Props) => {
    return(
    <div className='card'>
        <div className='card-info'>
            <p>"{quote}"</p>
            <p>–{author}</p>
        </div>
        <div className='card-btns'>
            <button onClick={editBtn}>EDIT</button>
            <button onClick={deleteBtn}>DELETE</button>
        </div>
    </div>)
}

export default QuoteCard