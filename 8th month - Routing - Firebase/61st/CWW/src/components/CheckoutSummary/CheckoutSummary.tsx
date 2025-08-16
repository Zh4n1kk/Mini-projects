import Burger from "../Burger/Burger";
import { TIngredients } from "../../types/TIngredients";
import Button from "../UI/Button/Button";
import "./CheckoutSummary.css";

interface Props {
 ingredients: TIngredients;
}

export function CheckoutSummary({ ingredients }: Props) {
 return (
   <div className="CheckoutSummary">
     <h1>We hope it tastes well!</h1>
     <div className="CheckoutSummaryBurger">
       <Burger ingredients={ingredients} />
     </div>
     <Button btnType="Danger" onClick={() => {}}>
       CANCEL
     </Button>
     <Button btnType="Success" onClick={() => {}}>
       CONTINUE
     </Button>
   </div>
 );
}