import { TIngredients } from "../../types/TIngredients"
import styles from './Burger.module.css'
import Ingredient from "../Ingredient/Ingredient"

type Props = {
    ingredients: TIngredients
}

const Burger = ({ingredients}: Props) => {
    const ingList: React.ReactNode[] = []
    Object.keys(ingredients)
        .forEach((igKey: string) => {
            let amount: number = ingredients[igKey as keyof typeof ingredients]
            for (let i = 0; i < amount; i++) {
                ingList.push(<Ingredient key={igKey + i} type={igKey as keyof typeof ingredients} />)
            }
        })
    return (
        <div className={styles.Burger}>
            <Ingredient type="bread-top" />
            {ingList.length 
                ? 
                    ingList 
                :
                    <p>Please start adding ingredients!</p>
            }
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger