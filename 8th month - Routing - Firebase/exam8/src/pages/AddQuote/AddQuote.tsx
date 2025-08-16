import {useState} from "react";
import {apiAxios} from "../../axios/apiAxios.ts";
import './AddQuote.css'
import { useNavigate } from "react-router";

const AddQuote = () => {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (author === '' || quote === '') return

        setAuthor('');
        setQuote('');
        navigate('/')
        try {
            await apiAxios.post('/quotes.json', { author, quote, category});
        } catch (err) {
            console.error(err);
        }
    }

    return (
            <form onSubmit={handleSubmit} className="form">
                <h2>Submit new quote</h2>
                <p>Category</p>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="star-wars">Star Wars</option>
                    <option value="famous">Famous people</option>
                    <option value="saying">Saying</option>
                    <option value="humour">Humour</option>
                    <option value="motivational">Motivational</option>
                </select>
                <p>Author</p>
                <input value={author} placeholder="Add author" onChange={(e) => setAuthor(e.target.value)} />
                <p>Quote Text</p>
                <textarea value={quote} placeholder="Add quote" onChange={(e) => setQuote(e.target.value)} />
                <button type="submit">Create quote</button>
            </form>
    )
}

export default AddQuote