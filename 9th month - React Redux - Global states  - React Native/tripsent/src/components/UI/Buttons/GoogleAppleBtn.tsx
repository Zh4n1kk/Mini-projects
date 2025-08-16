import styles from './GoogleAppleBtn.module.css'

const Buttons = () => {
    return (
        <div className={styles.buttons}>
            <button className={styles.Btn}>
                <img src="Apple.png" alt="Apple logo" />
                <p className={styles.titleBtn}>Apple</p>
            </button>
            <button className={styles.Btn}>
                <img src="Google logo.png" alt="Google logo" />
                <p className={styles.titleBtn}>Google</p>
            </button>
        </div>
    )
}

export default Buttons