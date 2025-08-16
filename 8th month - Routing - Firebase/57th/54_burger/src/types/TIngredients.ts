import { TIngredientNames } from "./TIngredientNames";

export type TIngredients = {
   [key in TIngredientNames]: number;
}
