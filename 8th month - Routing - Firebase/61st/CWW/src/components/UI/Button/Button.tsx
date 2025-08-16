import type { FormHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
 onClick?: MouseEventHandler<HTMLButtonElement>;
 btnType: 'Success' | 'Danger';
 children: ReactNode;
 formMethod?: string
}

const Button = ({onClick,btnType,children, formMethod}: Props) => {
 return (
   <button formMethod={formMethod} onClick={onClick} className={[styles.Button, styles[btnType]].join(' ')}>
     {children}
   </button>
 );
}

export default Button