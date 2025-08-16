import { useEffect, useState } from "react";
import { axiosOrder } from "../../axios/axiosOrder";
import type { TPageData } from "../../types/TPageData";
import MDEditor from "@uiw/react-md-editor";

type Props = {
	pageId: string;
};

const PageEditor = ({ pageId }: Props) => {
	const [data, setData] = useState<TPageData | null>(null);

	const fetchData = async (id: string) => {
		console.log(data);
		const response = await axiosOrder.get(`${id}.json`);
		await setData(response.data);
	};

	const patchData = async (id: string, updatedData: Partial<TPageData>) => {
		await axiosOrder.patch(`${id}.json`, updatedData);
	};

	useEffect(() => {
		fetchData(pageId);
	}, [pageId]);

	if (!data) return;
	return (
		<>
			<MDEditor
				value={data.header}
				onChange={(value) => {
					setData((prev) => (prev ? { ...prev, header: value || "" } : prev));
				}}
			/>
			<MDEditor
				value={data.body}
				onChange={(value) => {
					setData((prev) => (prev ? { ...prev, body: value || "" } : prev));
				}}
			/>
            <button onClick={() => {
					if (data) patchData(pageId, { header: data.header, body: data.body });
            }}>SAVE</button>
		</>
	);
};

export default PageEditor;
