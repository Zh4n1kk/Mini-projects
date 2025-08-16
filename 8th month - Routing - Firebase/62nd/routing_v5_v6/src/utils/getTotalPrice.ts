import { EIngredientPrices } from "../enums/EIngredientPrices"
import { TIngredientNames } from "../types/TIngredientNames"
import { TIngredients } from "../types/TIngredients"

export const getTotalPrice = (ingredients: TIngredients): number => {
    return Object.keys(ingredients).reduce((acc, key) => {
        return acc + EIngredientPrices[key as TIngredientNames] * ingredients[key as TIngredientNames]
    }, EIngredientPrices.bread) 
}