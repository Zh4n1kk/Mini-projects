import styles from "./Button.module.css"

type Props = {
    type: "darkBlue" | "lightBlue"
    title: string
    onClick: () => void
}

const Button = ({type,  title, onClick }: Props) => {
    return (
        <button
            className={`${styles.button} ${type === "darkBlue" ? styles.darkBlue : styles.lightBlue}`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button
