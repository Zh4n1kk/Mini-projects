/* eslint-disable */
import { TPost } from "@/types/TPost";
import axios from "axios"
import Post from "../Post/Post";
import { Suspense } from "react";
import FullPost from "../FullPost/FullPost";

const BASE_URL = 'http://146.185.154.90:8000/messages';

const Blog = async() => {
    let posts: TPost[] = []
    try {
    const postsRes = await axios.get(BASE_URL)
    posts = await postsRes.data
    } catch (err) {
        console.log(err)
    }

    return (
        <>
        <Suspense>
            <FullPost/>
        </Suspense>
        {posts.map((post,index) => {
            return(<Post 
                key={index}
                {...posts}
                />)
        })}   
        </>
    )
}
export default Blog