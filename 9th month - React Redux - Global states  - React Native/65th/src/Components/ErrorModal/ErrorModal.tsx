import styles from "./ErrorModal.module.css";
type Props = {
    message: string;
    onClose: () => void;
};

export const ErrorModal = ({ message, onClose }: Props) => {
    return (
        <>
            <div className={styles.overlayStyle} onClick={onClose} />
            <div className={styles.modalStyle}>
                <h3>Произошла ошибка</h3>
                <p>{message}</p>
                <button onClick={onClose} style={{ marginTop: "10px" }}>
                    Закрыть
                </button>
            </div>
        </>
    );
};