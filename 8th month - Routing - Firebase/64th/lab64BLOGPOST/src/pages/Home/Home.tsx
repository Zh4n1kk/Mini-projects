import {apiAxios} from "../../axios/apiAxios.ts";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

import BlogCard from "../../Components/BlogCard/BlogCard.tsx";
import Spinner from "../../Components/Spinner/Spinner.tsx";

import type {TPost} from "../../types/TPost.ts";

const Home = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Record < string, TPost >>({});
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await apiAxios.get(`/posts.json`);
            setPosts(response.data);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) return <Spinner />
    if (!posts) return <p>No info</p>
    return (
        <div>
            {Object.entries(posts).map(([id, post]) => (
                    <BlogCard key={id} postDate={post.date} body={post.title} onClick={() => navigate(`/posts/${id}`)} />
            ))}
        </div>
    )
}

export default Home