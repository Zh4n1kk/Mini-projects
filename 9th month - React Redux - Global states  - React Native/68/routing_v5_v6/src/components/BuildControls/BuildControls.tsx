import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import { EIngredientPrices } from '../../enums/EIngredientPrices'
import Modal from '../UI/Modal/Modal'
import { useRef } from 'react'
import OrderSummary from '../OrderSummary/OrderSummary'
import { useAppSelector } from '../../stores/newStore/useAppSelector'

// type Props = {
//     ingredients: TIngredients
//     price: number
//     ingredientAdded: (type: TIngredientNames) => void
//     ingredientRemoved: (type: TIngredientNames) => void
// }

const BuildControls = () => {
    const modalRef = useRef<HTMLDialogElement>(null)
    const { ingredients, totalPrice } = useAppSelector(state => state.burger)

    const showModalHandler = () => {
        if(!modalRef.current) return
        modalRef.current.showModal()
    }

    return (
        <div className={styles.BuildControls}>
            <p>Current Price: <strong>{totalPrice} ₸</strong></p>
            {Object.keys(ingredients)
            .map(ingType => {
                return <BuildControl 
                    key={ingType} 
                    type={ingType as keyof typeof ingredients} 
                    disabled={!!ingredients[ingType as keyof typeof ingredients]}
                />
            })
            }
            <button
                disabled={totalPrice <= EIngredientPrices.bread} 
                className={styles.OrderButton}
                onClick={showModalHandler}
             >
                ORDER NOW
            </button>
            <Modal ref={modalRef}>
                <OrderSummary />
            </Modal>
        </div>
    )
}

export default BuildControls