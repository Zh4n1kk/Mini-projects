// import { TIngredients } from "../../types/TIngredients"
// import { EIngredientPrices } from "../../enums/EIngredientPrices"
// import { useReducer } from "react"
import Burger from "../Burger/Burger"
import BuildControls from "../BuildControls/BuildControls"
// import { initialState, reducer } from "../../stores/oldStore/reducer"
// import { addIngredient, removeIngredient } from "../../stores/oldStore/actions"

const BurgerBuilder = () => {

    return (
        <>
            <Burger/>
            <BuildControls 
            />
        </>
    )
}

export default BurgerBuilder