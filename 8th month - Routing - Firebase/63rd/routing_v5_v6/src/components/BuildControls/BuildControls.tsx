import { TIngredients } from '../../types/TIngredients'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import { TIngredientNames } from '../../types/TIngredientNames'
import { EIngredientPrices } from '../../enums/EIngredientPrices'
import Modal from '../UI/Modal/Modal'
import { useRef } from 'react'
import OrderSummary from '../OrderSummary/OrderSummary'

type Props = {
    ingredients: TIngredients
    price: number
    ingredientAdded: (type: TIngredientNames) => void
    ingredientRemoved: (type: TIngredientNames) => void
}

const BuildControls = ({ingredients, price, ingredientAdded, ingredientRemoved}: Props) => {
    const modalRef = useRef<HTMLDialogElement>(null)

    const showModalHandler = () => {
        if(!modalRef.current) return
        modalRef.current.showModal()
    }

    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>{price} ₸</strong></p>
            {Object.keys(ingredients)
            .map(ingType => {
                return <BuildControl 
                    key={ingType} 
                    type={ingType as keyof typeof ingredients} 
                    added={() => ingredientAdded(ingType as keyof typeof ingredients)}
                    removed={() => ingredientRemoved(ingType as keyof typeof ingredients)}
                    disabled={!!ingredients[ingType as keyof typeof ingredients]}
                />
            })
            }
            <button
                disabled={price <= EIngredientPrices.bread} 
                className={styles.OrderButton}
                onClick={showModalHandler}
             >
                ORDER NOW
            </button>
            <Modal ref={modalRef}>
                <OrderSummary 
                    ingredients={ingredients}
                    price={price}
                />
            </Modal>
        </div>
    )
}

export default BuildControls