import styles from './Input.module.css'

type Props = {
    label?: string
    type?: string
    name?: string
    placeholder?: string
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
}

const Input = ({label, type, name, placeholder, value, onChange, disabled}: Props) => {
    return (
        <div className={styles.Input}>
            {label && <label className={styles.InputLabel}>{label}</label>}
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={styles.InputInput}
            />
        </div>
    )
}
export default Input