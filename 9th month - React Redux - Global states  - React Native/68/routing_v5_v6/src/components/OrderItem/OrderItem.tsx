import styles from './OrderItem.module.css';
import { TIngredients } from '../../types/TIngredients';
import { TIngredientNames } from '../../types/TIngredientNames';


type Props = {
    ingredients: TIngredients;
    price: number;
}

const OrderItem = ({ ingredients, price }: Props) => {

    const ingredientsParsed = Object.keys(ingredients).map(igName => {
        return {
            name: igName || '',
            amount: ingredients[igName as TIngredientNames] || 0
        };
    });

    return (
        <div className={styles.OrderItem}>
            <p>Ingredients: {ingredientsParsed.map(ig => (
                <span key={ig.name}>{ig.name} ({ig.amount})</span>
            ))}</p>
            <p>Price: <strong>{price} KZT</strong></p>
        </div>
    );

};

export default OrderItem;