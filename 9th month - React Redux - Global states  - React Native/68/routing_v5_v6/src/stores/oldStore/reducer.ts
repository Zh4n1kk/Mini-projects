import { EIngredientPrices } from "../../enums/EIngredientPrices"
import { TIngredients } from "../../types/TIngredients"
import { Action } from "./actions"

export type State = {
    ingredients: TIngredients
    totalPrice: number
    purchasing: boolean
}

export const initialState: State = {
    ingredients: {
        bacon: 0,
        cheese: 0,
        meat: 0,
        salad: 0,
    },
    totalPrice: EIngredientPrices.bread,
    purchasing: false
}

export const reducer = (state = initialState, action: Action): State => {
    switch(action.type) {
        case 'ADD_INGREDIENT':
            return {...state, 
                ingredients: {...state.ingredients, [action.payload]: state.ingredients[action.payload] + 1
                }, 
                totalPrice: state.totalPrice + EIngredientPrices[action.payload]}
        case 'REMOVE_INGREDIENT':
            return {...state, 
                ingredients: {...state.ingredients, [action.payload]: state.ingredients[action.payload] - 1
                },
            totalPrice: state.totalPrice - EIngredientPrices[action.payload]}
        default: return state
    }
}