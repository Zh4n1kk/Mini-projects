import { TIngredients } from "../../types/TIngredients"
import styles from './OrderSummary.module.css'
import Button from "../UI/Button/Button"
import { FormEvent } from "react"
import { useNavigate, createSearchParams, URLSearchParamsInit } from "react-router-dom"

type Props = {
    ingredients: TIngredients
    price: number
}

const OrderSummary = ({ ingredients, price }: Props) => {

    const navigate = useNavigate()
    const ingredientSummary = Object.keys(ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span className={styles.listItem}>{igKey}</span>:{' '}
                {ingredients[igKey as keyof typeof ingredients]}
            </li>
        );
    });

    const submit = (e: FormEvent) => {
        e.preventDefault()
        // {meat: 1, salad: 2 ...}
        // .../chackout?uim=wefwef123
        // .../chackout?meat=1&salad=2& ...

        // meat=1&salad=2& ...
        const params = createSearchParams(ingredients as unknown as URLSearchParamsInit);
        navigate({
            pathname: '/checkout',
            search: `?${params.toString()}`
        })
    }

    return (
        <>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul className={styles.list}>{ingredientSummary}</ul>
            <p>
                <strong>Total Price: {price} ₸</strong>
            </p>
            <p>Continue to checkout?</p>
            <div className={styles.formBlock}>
                <form>
                    <Button formMethod="dialog" btnType="Danger">CLOSE</Button>
                </form>
                <form onSubmit={submit}>
                    <Button btnType="Success">CONTINUE</Button>
                </form>
            </div>
        </>
    );
}

export default OrderSummary