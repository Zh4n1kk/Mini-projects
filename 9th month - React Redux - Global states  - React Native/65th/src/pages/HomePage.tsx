"use client";

import { axiosApi } from "@/axios/axiosApi";
import { withErrorHandler } from "@/Components/ErrorHandler/ErrorHandler";
import Spinner from "@/Components/Spinner/Spinner";
import { useState } from "react";
import './HomePage.css'

type TPost = {
	body: string;
	title: string;
	date: string;
};

const HomePage = () => {
	const [data, setData] = useState<Record<string, TPost>>({});
	const [loading, setLoading] = useState(false);
	const fetchData = async () => {
		setLoading(true);
		setData({});
		try {
			const request = await axiosApi.get("/posts.json");
			setData(request.data);
		} catch (error) {
			throw error;
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<button onClick={fetchData} className="home_btn">Fetch data...</button>
			{loading ? <Spinner /> : ""}
            <div className="home_list">
			{Object.entries(data).map(([id, el]) => {
				return <div key={id}>{el.body}</div>;
			})}
            </div>
		</>
	);
};

export default withErrorHandler(HomePage, axiosApi);
