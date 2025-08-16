import {useEffect, useState} from "react";
import {apiAxios} from "../../axios/apiAxios.ts";
import './EditQuote.css'
import { useNavigate, useParams } from "react-router";

const EditQuote = () => {
    const [author, setAuthor] = useState('');
    const [quote, setQuote] = useState('');
    const [category, setCategory] = useState('');

    const { id } = useParams()
    const navigate = useNavigate()

        const fetchQuote = async () => {
        try {
            const response = await apiAxios.get(`/quotes/${id}.json`)
            setAuthor(response.data.author)
            setQuote(response.data.quote)
            setCategory(response.data.category)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (author === '' || quote === '') return

        try {
            await apiAxios.patch(`/quotes/${id}.json`, { author, quote, category});
            navigate('/')
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchQuote()
    }, [])

    return (
            <form onSubmit={handleSubmit} className="form">
                <h2>Edit a quote</h2>
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
                <p>Quote text</p>
                <textarea value={quote} placeholder="Add quote" onChange={(e) => setQuote(e.target.value)} />
                <button type="submit">Save changes</button>
            </form>
    )
}

export default EditQuote