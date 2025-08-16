import style from "./ModalWindow.module.css";
type Props = {
    children: React.ReactNode
	close: () => void
	show: boolean
}

const ModalWindow = ({children, close, show}: Props) => {

	if(!show) return
	return (
		<div>
		<div className={style.modalWindow_bg} onClick={close}></div>
		<div className={style.modalWindow_body}>
			<div className={style.modalWindow_hr}></div>
            {children}
		</div>
		</div>
	);
};

export default ModalWindow;
