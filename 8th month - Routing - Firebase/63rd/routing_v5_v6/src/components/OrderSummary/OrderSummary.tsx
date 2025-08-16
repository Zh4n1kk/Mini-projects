import { TIngredients } from "../../types/TIngredients"
import styles from './OrderSummary.module.css'
import Button from "../UI/Button/Button"
import { FormEvent } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

type Props = {
    ingredients: TIngredients
    price: number
}

const OrderSummary = ({ ingredients, price }: Props) => {
    const [searchParams, setSearchParams] = useSearchParams()
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

        setSearchParams((searchParams) => {
            Object.keys(ingredients).forEach(key => {
                searchParams.set(key, ingredients[key as keyof typeof ingredients] + '');
            }) 
            return searchParams;
        });
        navigate({
            pathname: '/checkout',
            search: `${searchParams.toString()}`
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