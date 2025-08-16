import Item from "@/types/Item"

type Props = {
    sortByName: () => void
    sortByPrice: () => void
    sortByAvailability: () => void
    itemList: Item[]
    decrement: (value: number) => void
}

const ProductOutput = ({sortByName,sortByAvailability,sortByPrice,itemList,decrement}: Props) => {
    return (
        				<div className={`border-2 flex flex-col gap-2 list`}>
					<div className={`flex gap-5 border-1 h-10 items-center`}>
						<p className="w-[33%] cursor-pointer" onClick={sortByName}>
							Item name
						</p>
						<p className="w-[33%] cursor-pointer" onClick={sortByPrice}>
							Price
						</p>
						<p className="w-[33%] cursor-pointer" onClick={sortByAvailability}>
							Current Stock
						</p>
					</div>
					{itemList.length > 1 ? (
						itemList.map((el, index) => {
							if (el.name === "") return;
							return (
								<div
									className={`flex gap-5 border-2 h-10 items-center`}
									key={el.name}
								>
									<p className="w-[33%]">{el.name}</p>
									<p className="w-[33%]">{el.price}</p>
									<div className="flex gap-5">
										<p className="w-[10%] pr">
											{el.quantity > 0 ? el.quantity : "N/A"}
										</p>
										<button
											className={`border-2`}
											onClick={() => decrement(index)}
											disabled={el.quantity === 0}
										>
											-
										</button>
									</div>
								</div>
							);
						})
					) : (
						<p className="text-center">No products available</p>
					)}
				</div>
    )
}

export default ProductOutput