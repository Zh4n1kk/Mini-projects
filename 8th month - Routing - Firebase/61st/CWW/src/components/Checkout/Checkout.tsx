import { useState } from "react";
import { TIngredients } from "../../types/TIngredients";
import { CheckoutSummary } from "../CheckoutSummary/CheckoutSummary";

export function Checkout() {
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const [ingredients, setIngredients] = useState<TIngredients>({
   salad: 1,
   meat: 1,
   cheese: 1,
   bacon: 1,
 });

 return <CheckoutSummary ingredients={ingredients} />;
}

