import { useEffect, useRef, useState } from "react";
import { TIngredients } from "../../types/TIngredients";
import { CheckoutSummary } from "../CheckoutSummary/CheckoutSummary";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getTotalPrice } from "../../utils/getTotalPrice";




export function Checkout() {
    const [searchParams] = useSearchParams()
    const ingredients = useRef(Object.fromEntries(searchParams) as unknown as TIngredients)
    const [price, setPrice] = useState<number>(0)
    const navigate = useNavigate();

    useEffect(() => {
        const tempPrice = getTotalPrice({...ingredients.current})
        setPrice(tempPrice)

    }, [ingredients.current])

    const checkoutCancelledHandler = () => {
        navigate('/');
    };

    const checkoutContinuedHandler = () => {
        const price = getTotalPrice({...ingredients.current})
        navigate({
            pathname: 'contact-data',
            search: searchParams.toString()
        },
            {state: {
            ingredients: ingredients.current,
            price
        }});
    };

    return <CheckoutSummary 
                price={price}
                ingredients={ingredients.current} 
                checkoutContinued={checkoutContinuedHandler}
                checkoutCancelled={checkoutCancelledHandler}
            />;
}