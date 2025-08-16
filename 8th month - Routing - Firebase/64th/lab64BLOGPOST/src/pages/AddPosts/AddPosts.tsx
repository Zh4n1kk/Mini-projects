import {useState} from "react";
import {apiAxios} from "../../axios/apiAxios.ts";
import { useNavigate } from "react-router";

const AddPosts = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title === '' || body === '') return

        const post = {
            title,
            body,
            date: new Date().toISOString(),
        }
        setTitle('');
        setBody('');
        try {
            await apiAxios.post('/asd.json', post);
        } catch (err) {
            console.error(err);
        } finally {
            navigate('/')
        }
    }
    return (
            <form onSubmit={handleSubmit} className="add_form">
                <input className="add_input" value={title} placeholder="Add title" onChange={(e) => setTitle(e.target.value)} />
                <textarea className="add_form" value={body} placeholder="Add text" onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Create post</button>
            </form>
    )
}

export default AddPosts