"use client";

import AlertPop from "@/components/UI/AlertPop/AlertPop";
import ModalWindow from "@/components/UI/ModalWindow/ModalWindow";
import { useEffect, useState } from "react";

export default function Home() {
	const [show, setShow] = useState(false);
	const [showDismiss, setShowDismiss] = useState(true);
	const [showPrimary, setShowPrimary] = useState(true);
	const [showAuto, setShowAuto] = useState(true);
	const [showClick, setShowClick] = useState(true);

	useEffect(() => {
		if (showAuto) {
			const timer = setTimeout(() => setShowAuto(false), 5000);
			return () => clearTimeout(timer);
		}
	}, [showAuto]);

	return (
		<>
			<ModalWindow
				title="Here you can type title"
				show={show}
				close={() => setShow(false)}
			>
				Lorem Ipsum is a lie made by romans in iron age
			</ModalWindow>
			<div className={`absolute pt-2.5`}>
				<div className="flex flex-col justify-center w-screen items-center">
					{showDismiss ? (
						<AlertPop type="primary" dismiss={() => setShowDismiss(false)}>
							has button to close | primary pop-up
						</AlertPop>
					) : (
						""
					)}

					{showPrimary ? (
						<AlertPop type="danger" dismiss={() => setShowPrimary(false)}>
							has button to close | danger pop-up
						</AlertPop>
					) : (
						""
					)}

					{showAuto ? (
						<AlertPop type="success">
							Removes by yourself after 5 seconds | success pop-up
						</AlertPop>
					) : (
						""
					)}

					{showClick ? (
						<AlertPop type="warning" onClick={() => setShowClick(false)}>
							Deleting on click | warning pop-up
						</AlertPop>
					) : (
						""
					)}
				</div>
			</div>
			<div className="h-screen flex items-center justify-center">
				<button
					onClick={() => {
						setShow(true);
					}}
				>
					OPEN MODAL
				</button>
			</div>
		</>
	);
}
