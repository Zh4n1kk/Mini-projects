import type { TIngredientNames } from '../../../types/TIngredientNames'
import styles from './BuildControl.module.css'
import { type MouseEventHandler } from 'react'

type Props = {
    type: TIngredientNames
    added: MouseEventHandler<HTMLButtonElement>
    removed: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

const BuildControl = ({type, added, removed, disabled}: Props) => {
    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{type}</div>
            <button disabled={!disabled} onClick={removed} className={styles.Less}>Less</button>
            <button onClick={added} className={styles.More}>More</button>
        </div>
    )
}

export default BuildControl