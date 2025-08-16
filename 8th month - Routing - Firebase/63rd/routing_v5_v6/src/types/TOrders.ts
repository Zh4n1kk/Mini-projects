import { TCustomerData } from "./TCustomerData"
import { TIngredients } from "./TIngredients"

export type TOrder = {
    customer: TCustomerData,
    ingredients: TIngredients,
    price: number
}