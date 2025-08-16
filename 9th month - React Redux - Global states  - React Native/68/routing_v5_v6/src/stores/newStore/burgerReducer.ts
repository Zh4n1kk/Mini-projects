import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { EIngredientPrices } from "../../enums/EIngredientPrices"
import { TIngredients } from "../../types/TIngredients"
import { TIngredientNames } from "../../types/TIngredientNames"

export type State = {
    ingredients: TIngredients
    totalPrice: number
}

const namespace = 'burger'

const initialState: State = {
    ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0
    },
    totalPrice: EIngredientPrices.bread
}

const burgerSlice = createSlice({
    name: namespace,
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<TIngredientNames>) => {
            state.ingredients[action.payload] = state.ingredients[action.payload] + 1
            state.totalPrice += EIngredientPrices[action.payload]
        },
        removeIngredient: (state, action: PayloadAction<TIngredientNames>) => {
            state.ingredients[action.payload] = state.ingredients[action.payload] - 1
            state.totalPrice -= EIngredientPrices[action.payload]
        },
    }
})

export default burgerSlice.reducer
export const { 
    addIngredient, 
    removeIngredient
} = burgerSlice.actions