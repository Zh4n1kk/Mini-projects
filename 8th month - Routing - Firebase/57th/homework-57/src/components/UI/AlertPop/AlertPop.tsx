import style from "./AlertPop.module.css";

type Props = {
	type: "primary" | "success" | "danger" | "warning";
	dismiss?: () => void;
	children: React.ReactNode;
	onClick?: () => void;
};

const AlertPop = ({ type, dismiss, children, onClick }: Props) => {
	return (
		<div
			onClick={onClick}
			className={`${style[type]} flex justify-between w-full p-3 max-w-md mb-2 items-center rounded`}
		>
			<span>{children}</span>
			{dismiss ? (
				<button
					className="rounded h-5 flex items-center"
					onClick={(e) => {
						e.stopPropagation();
						dismiss();
					}}
				>
					X
				</button>
			) : (
				""
			)}
		</div>
	);
};

export default AlertPop;
