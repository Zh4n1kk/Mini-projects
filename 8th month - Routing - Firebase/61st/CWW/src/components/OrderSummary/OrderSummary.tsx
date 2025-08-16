import type { TIngredients } from "../../types/TIngredients"
import styles from "./OrderSummary.module.css";
import Button from "../UI/Button/Button";
import type { FormEvent } from "react";

type Props = {
	ingredients: TIngredients;
	price: number;
};
const OrderSummary = ({ ingredients, price }: Props) => {
	const submit = (e: FormEvent) => {
		e.preventDefault();
		alert("HI");
	};
	const ingredientSummary = Object.keys(ingredients).map((igKey) => {
		return (
			<li key={igKey}>
				<span className={styles.listItem} style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
				{ingredients[igKey as keyof typeof ingredients]}
			</li>
		);
	});
	return (
		<div className={styles.cont}>
			<h3>Your order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul className={styles.list}>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: {price} ₸</strong>
			</p>
			<p>Continue to checkout?</p>
    <div style={{display: 'flex'}}>
      			<form onSubmit={submit}>
				<Button formMethod="dialog" btnType="Success">CONTINUE</Button>
			</form>
      <form>
				<Button formMethod="dialog" btnType="Danger" onClick={() => {}}>CANCEL  </Button>
      </form>
    </div>
		</div>
	);
};

export default OrderSummary;
