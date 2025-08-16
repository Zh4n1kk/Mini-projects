import Item from "@/types/Item";
import { Dispatch, SetStateAction } from "react";

type Props = {
	name: string;
	price: string;
	quantity: string;
	setName: (value: string) => void;
	setPrice: (value: string) => void;
	setQuantity: (value: string) => void;
	handleSubmit: () => void;
	itemList: Item[];
	setItemList: Dispatch<SetStateAction<Item[]>>
};

const ProductForm = ({
	name,
	price,
	quantity,
	setName,
	setPrice,
	setQuantity,
	itemList,
	handleSubmit,
	setItemList,
}: Props) => {
	return (
		<form className="flex flex-col">
			<input
				placeholder="Title"
				name="name_input"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			></input>
			<input
				placeholder="Price"
				value={price}
				onChange={(e) => {
					if (e.target.value === "" || /\d+$/.test(e.target.value)) {
						setPrice(e.target.value);
					} else {
						return;
					}
				}}
			></input>
			<input
				placeholder="Stock availability"
				value={quantity}
				onChange={(e) => {
					if (e.target.value === "" || /\d+$/.test(e.target.value)) {
						setQuantity(e.target.value);
					} else {
						return;
					}
				}}
			></input>
			<button
				onClick={(e) => {
					e.preventDefault();
					if (name.trim() === "") return;
					if (price.trim() === "") return;
					if (quantity.trim() === "") return;
					const index = itemList.findIndex(
						(i) => i.name.toUpperCase() === name.toUpperCase()
					);
					if (index === -1) {
						handleSubmit();
						setPrice("");
						setName("");
						setQuantity("");
					} else {
						const newList = [...itemList];
						newList[index].price = Number(price);
						newList[index].quantity += Number(quantity);
						setItemList(newList);
					}
				}}
			>
				submit
			</button>
		</form>
	);
};

export default ProductForm;
