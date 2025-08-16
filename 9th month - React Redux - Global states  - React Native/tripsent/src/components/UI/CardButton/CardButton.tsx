import Link from 'next/link'
import styles from './CardButton.module.css'

type Props = {
    label: string
    onClick: string
}

const CardButton = ({label, onClick}: Props) => {
    return (
        <>
            <Link href={onClick} className={styles.CardButton}>{label}</Link>
        </>
    )
}

export default CardButton