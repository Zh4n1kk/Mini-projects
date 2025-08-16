import { data } from "@/constants/data"
import Card from "../Card/Card"
import styles from './CardList.module.css'

const CardList = () => {
    return (
        <div className={styles.CardLIst}>
            {data.map(card => {
                return <Card key={card.price} url={card.url} price={card.price}/>
            })}
        </div>
    )
}

export default CardList