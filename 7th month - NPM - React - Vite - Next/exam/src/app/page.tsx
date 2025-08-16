"use client";
import ProductForm from "@/components/UI/ProductForm/ProductForm";
import "./globals.css";
import { useEffect, useState } from "react";
import ProductOutput from "@/components/UI/ProductOutput/ProductOutput";

export default function Home() {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [quantity, setQuantity] = useState("");
	const [itemList, setItemList] = useState([
		{ name: ``, price: "", quantity: 0 },
		{ name: "Apple", price: 210, quantity: 20 },
		{ name: "Zink", price: 150, quantity: 20 },
		{ name: "Cider", price: 2500, quantity: 20 },
		{ name: "Erlang", price: 5000, quantity: 20 },
		{ name: "MacBook", price: 15000000, quantity: 20 },
	]);

	const sortByName = () => {
		const sorted = [...itemList].sort((a, b) => a.name.localeCompare(b.name));
		setItemList(sorted);
	};
	const sortByPrice = () => {
		const sorted = [...itemList].sort(
			(a, b) => Number(a.price) - Number(b.price)
		);
		setItemList(sorted);
	};

	const sortByAvailability = () => {
		const sorted = [...itemList].sort(
			(a, b) => Number(a.quantity) - Number(b.quantity)
		);
		setItemList(sorted);
	};
	const handleSubmit = () => {
		setItemList([
			...itemList,
			{ name: name, price: Number(price), quantity: Number(quantity) },
		]);
	};

	const decrement = (index: any) => {
		const newList = [...itemList];
		if (newList[index].quantity <= 0) return;
		newList[index].quantity--;
		setItemList(newList);
	};

	useEffect(() => {}, [JSON.stringify(itemList)]);
	return (
		<div className="flex w-full justify-center flex-col items-center">
			<div className="w-5xl ">
				<ProductOutput 
				sortByName={sortByName} 
				sortByPrice={sortByPrice} 
				sortByAvailability={sortByAvailability} 
				itemList={itemList} 
				decrement={decrement} />
				<hr></hr>
				<ProductForm 
					name={name}
					quantity={quantity}
					price={price}
					setName={setName}
					setPrice={setPrice}
					setQuantity={setQuantity}
					handleSubmit={handleSubmit}
					itemList={itemList} 
					setItemList= {setItemList}
					/>
			</div>
		</div>
	);
}
