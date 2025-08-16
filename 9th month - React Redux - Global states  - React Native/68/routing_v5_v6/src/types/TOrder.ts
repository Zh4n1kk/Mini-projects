import { TCustomerData } from "./TCustomerData"
import { TIngredients } from "./TIngredients"

export type TOrder = {
    id: string
    customer: TCustomerData
    ingredients: TIngredients
    price: number
}