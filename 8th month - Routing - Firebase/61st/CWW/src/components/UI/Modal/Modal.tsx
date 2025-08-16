import styles from './Modal.module.css'

type Props = {
    children: React.ReactNode
    ref: React.RefObject<HTMLDialogElement | null>
}

const Modal = ({children,ref}: Props) => {

    const backdropCloseHandler = ( e: React.MouseEvent ) => {
        const dialogDimentions = ref.current?.getBoundingClientRect()
        if (ref.current && dialogDimentions && (
            e.clientX < dialogDimentions.left ||
            e.clientX > dialogDimentions.right ||
            e.clientY < dialogDimentions.top ||
            e.clientY > dialogDimentions.bottom 
            )
        ) {
            ref.current.close()
        }
    }
    return <dialog className={styles.Modal} ref={ref}>{children}</dialog>
}

export default Modal