import {apiAxios} from "../../axios/apiAxios.ts";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

import type {TPost} from "../../types/TPost.ts";

import './PostEdit.css'

const PostEdit = () => {
    const [post, setPost] = useState<TPost | null>(null)

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const {id} = useParams()
    const navigate = useNavigate()

    const fetchPost = async () => {
        try {
            const response = await apiAxios.get(`/posts/${id}.json`)
            setPost(response.data)
            setTitle(response.data.title)
            setBody(response.data.body)
        } catch (err) {
            console.log(err)
        }
    }

    const formSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        await apiAxios.patch(`posts/${id}.json`, {title: title, body: body})
        navigate('/posts/')
    }

    useEffect(() => {
        fetchPost()
    }, []);

    if (!post) return null
    return(
        <>
            <form onSubmit={formSubmit} className="add_form">
                <input className="add_input" value={title} placeholder={'title'} onChange={(e) => setTitle(e.target.value)}/>
                <input className="add_input" value={body} placeholder={'body'} onChange={(e) => setBody(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default PostEdit