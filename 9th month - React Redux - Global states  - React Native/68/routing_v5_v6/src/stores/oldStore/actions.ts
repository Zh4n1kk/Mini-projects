import { TIngredientNames } from "../../types/TIngredientNames";

export type AddIngredient = {type: 'ADD_INGREDIENT', payload: TIngredientNames};
export type RemoveIngredient = {type: 'REMOVE_INGREDIENT', payload: TIngredientNames;};
export type Action = AddIngredient | RemoveIngredient;

export const addIngredient = (payload: TIngredientNames): AddIngredient => ({type: 'ADD_INGREDIENT', payload})
export const removeIngredient = (payload: TIngredientNames): RemoveIngredient => ({type: 'REMOVE_INGREDIENT', payload})