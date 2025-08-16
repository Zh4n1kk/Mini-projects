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
			<div
				className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10`}
			>
				<div className="bg-white text-black w-[500px] h-[250px] rounded">
					<div className="flex justify-between items-center p-1">
						<p className={`font-bold text-[24px]`}>{title}</p>
						<button
							className={`p-2 w-[50px] border-2 flex justify-center`}
							onClick={close}
						>
							X
						</button>
					</div>
					<hr></hr>
					<p className={`p-2`}>{children}</p>
				</div>
			</div>
		</>
	);
};

export default ModalWindow;
