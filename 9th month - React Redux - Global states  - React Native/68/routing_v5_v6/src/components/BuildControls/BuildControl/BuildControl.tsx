import { addIngredient, removeIngredient } from '../../../stores/newStore/burgerReducer'
import { useAppDispatch } from '../../../stores/newStore/useAppDispatch'
import { TIngredientNames } from '../../../types/TIngredientNames'
import styles from './BuildControl.module.css'

type Props = {
    type: TIngredientNames
    // added: MouseEventHandler<HTMLButtonElement>
    // removed: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

const BuildControl = ({type, disabled}: Props) => {
    const dispatch = useAppDispatch()
    const add = (type: TIngredientNames) => {
        dispatch(addIngredient(type))
    }
    const remove = (type: TIngredientNames) => {
        dispatch(removeIngredient(type))
    }

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{type}</div>
            <button disabled={!disabled} onClick={() => remove(type)} className={styles.Less}>Less</button>
            <button onClick={() => add(type)} className={styles.More}>More</button>
        </div>
    )
}

export default BuildControl