import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {apiAxios} from "../../axios/apiAxios.ts";

import type {TPost} from "../../types/TPost.ts";

import Spinner from "../../Components/Spinner/Spinner.tsx";

const PostView = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [post, setPost] = useState<TPost | null>(null)
    const [loading, setLoading] = useState(false)

    const fetchPost = async () => {
        setLoading(true)
        try {
            const response = await apiAxios.get(`/posts/${id}.json`)
            setPost(response.data)
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }  
    }

    const handleClick = () => {
        navigate(`/posts/${id}/edit`)
    }

    useEffect(() => {
        fetchPost()
    }, []);

    const handleDelete = () => {
        apiAxios.delete(`/posts/${id}.json`)
        navigate(`/posts/`)
    }

    const formattedDate = post? new Date(post.date).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    }) : null

    if (loading) return <Spinner />
    return (
        <div>
            <p>{post?.title}</p>
            <p>{post?.body}</p>
            <p>Created at: {formattedDate}</p>
            <button onClick={handleClick}>EDIT</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default PostView;