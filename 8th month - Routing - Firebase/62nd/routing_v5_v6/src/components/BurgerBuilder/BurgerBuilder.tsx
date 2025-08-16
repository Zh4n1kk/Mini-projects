'use client'

import { TIngredients } from "../../types/TIngredients"
import { useState } from "react"
import Burger from "../Burger/Burger"
import BuildControls from "../BuildControls/BuildControls"
import { TIngredientNames } from "../../types/TIngredientNames"
import { EIngredientPrices } from "../../enums/EIngredientPrices"

const BurgerBuilder = () => {
    const [totalPrice, setTotalPrice] = useState<number>(EIngredientPrices.bread)
    const [ingredients, setIngredients] = useState<TIngredients>({
        salad: 0,
        meat: 0,
        bacon: 0,
        cheese: 0
    })

    const addIngredientHandler = (type: TIngredientNames) => {
        setIngredients(prevState => ({...prevState, [type]: prevState[type] + 1}))
        setTotalPrice(prevState => prevState + EIngredientPrices[type])
    }

    const removeIngredientHandler = (type: TIngredientNames) => {
        setIngredients(prevState => ({...prevState, [type]: Math.max(0, prevState[type] - 1)}))
        setTotalPrice(prevState => prevState - EIngredientPrices[type])
    }

    return (
        <>
            <Burger ingredients={ingredients} />
            <BuildControls 
                ingredients={ingredients}
                price={totalPrice}
                ingredientAdded={addIngredientHandler}
                ingredientRemoved={removeIngredientHandler}
            />
        </>
    )
}

export default BurgerBuilder