import { TPost } from "@/types/TPost"
import axios from "axios"

const FullPost = async() => {
    try {
    const postsRes = await axios.get('http://146.185.154.90:8000/messages')
    const posts: TPost = await postsRes.data
    return (
        <>
        {posts.map((post) => {
            return(<>{post.id}</>)
        })}   
        </>
    )
    } catch (err) {
        console.log(err)
    }

}
export default FullPost