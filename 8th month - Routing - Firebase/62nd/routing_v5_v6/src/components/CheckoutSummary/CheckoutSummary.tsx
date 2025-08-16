import Burger from "../Burger/Burger";
import { TIngredients } from "../../types/TIngredients";
import Button from "../UI/Button/Button";
import styles from "./CheckoutSummary.module.css";
import { MouseEventHandler } from "react";
import { Outlet } from "react-router-dom";

interface Props {
    ingredients: TIngredients;
    checkoutContinued: MouseEventHandler<HTMLButtonElement>
    checkoutCancelled: MouseEventHandler<HTMLButtonElement>
    price: number
}

export function CheckoutSummary({ ingredients, checkoutContinued, checkoutCancelled, price }: Props) {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <h2>Price: {price}</h2>
            <div className={styles.CheckoutSummaryBurger}>
                <Burger ingredients={ingredients} />
            </div>
            <Button btnType="Danger" onClick={checkoutCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" onClick={checkoutContinued}>
                CONTINUE
            </Button>
            <Outlet />
        </div>
    );

}