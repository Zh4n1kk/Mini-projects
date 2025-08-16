import { TPost } from "@/types/TPost"
import styles from './Post.module.css'

type Props = TPost

const Post = (post: Props) => {
return (
    <div className={styles.Post}>
        <h3>{post.author}</h3>
        <p>{post.message}</p>
    </div>
    )
}

export default Post