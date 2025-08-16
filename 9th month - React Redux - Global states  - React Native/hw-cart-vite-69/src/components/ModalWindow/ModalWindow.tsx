import './ModalWindow.css'

type Props = {
	show: boolean;
	close: () => void;
	title: string;
	children: React.ReactNode;
};
const ModalWindow = ({ show, close, title, children }: Props) => {
	if (!show) return;

	return (
		<>
<div className="modal-container">
  <div className="modal-content">
    <div className="modal-header">
      <p className="modal-title">{title}</p>
      <button className="modal-close" onClick={close}>X</button>
    </div>
    <hr />
    <p className="modal-body">{children}</p>
  </div>
</div>
		</>
	);
};

export default ModalWindow;
