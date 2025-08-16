import Image from "next/image"
import image from '../../../public/image.jpg'
import styles from './Card.module.css'
import CardButton from "../UI/CardButton/CardButton"

type Props = {
    url: string
    price: string
    onClick: string
}

const Card = ({url, price, onClick}: Props) => {
    return (
        <div className={styles.Card}>
            <Image
                className={styles.CardImage}
                src={url}
                width={310}
                height={191}
                alt='image'
                priority
            />
            <div className={styles.CardInfo}>
                <div className={styles.CardCountry}>
                    <p className={styles.Country}>Madrid</p>
                    <p>{'>'}</p>
                    <p className={styles.Country}>Almaty</p>
                </div>

                <div className={styles.Sender}>
                    <span>Sender</span>
                    <p className={styles.SenderInfo}>4.9 | PashaStarman</p>
                </div>

                <div className={styles.PriceDiv}>
                    <p className={styles.Price}>{price} KZT</p>
                </div>
            </div>
            <CardButton onClick={onClick} label={"Let's go"}/>
        </div>
    )
}

export default Card