import './BlogCard.css'

type Props = {
    postDate: string
    body: string
    onClick: () => void
}

const BlogCard = ({postDate,body,onClick}: Props) => {
    const formattedDate = new Date(postDate).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    })

    return (
        <div className={'blog-card'}>
            <p>Creted on {formattedDate}</p>
            <p>{body}</p>
            <button onClick={onClick}>Read More...</button>
        </div>
    )
}

export default BlogCard