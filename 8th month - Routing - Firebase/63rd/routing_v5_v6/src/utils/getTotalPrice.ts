import { EIngredientPrices } from "../enums/EIngredientPrices";
import { TIngredientNames } from "../types/TIngredientNames";


export const getTotalPrice = (searchParms: object): number => {
    return Object.keys(searchParms).reduce((acc: number, key) => {
        if (!EIngredientPrices[key as keyof typeof searchParms]) {
            return acc
        }
        const total = acc + EIngredientPrices[key as TIngredientNames] * searchParms[key as keyof typeof searchParms]
        return total
    }, EIngredientPrices.bread)
}