import './Card.css'

type Props = {
    header: string
    children: React.ReactNode
}

const Card = ({children, header}: Props) => {
    return (
        <div className="Card">
            <div className="Card_header">{header}</div>
            <div className="Card_body">{children}</div>
        </div>
    )
}

export default Card