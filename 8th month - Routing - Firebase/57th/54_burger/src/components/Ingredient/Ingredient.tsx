import { TIngredientNames } from '@/types/TIngredientNames'
import styles from './Ingredient.module.css'

type Props = {
    type: TIngredientNames | 'bread-top' | 'bread-bottom'
}

const Ingredient = ({type}: Props) => {
    switch (type) {
    case 'bread-bottom':
      return <div className={styles.BreadBottom} />;
    case 'bread-top':
      return (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}/>
          <div className={styles.Seeds2}/>
        </div>
      );
    case 'meat':
      return <div className={styles.Meat} />;
    case 'cheese':
      return <div className={styles.Cheese} />;
    case 'salad':
      return <div className={styles.Salad} />;
    case 'bacon':
      return <div className={styles.Bacon} />;
    default:
      return null;
  }
}

export default Ingredient