import styles from "./Card.module.css";

type Props = {
	itemImg: string;
	name: string;
	price: string;
	onClick: () => void;
	btnName: string;
};

const Card = ({ itemImg, name, price, onClick, btnName }: Props) => {
	return (
		<div className={styles.CardWrap}>
			<div className={styles.Card}>
				<img src={itemImg}></img>
				<div className={styles.info}>
					<div>{name}</div>
					<div>{price} KZT</div>
				</div>
			</div>
			<button onClick={onClick}>{btnName}</button>
		</div>
	);
};

export default Card;
