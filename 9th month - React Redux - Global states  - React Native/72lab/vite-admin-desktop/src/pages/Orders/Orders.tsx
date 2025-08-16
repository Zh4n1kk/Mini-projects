import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import useStoreAdmin from "../../store/store";

const Orders = () => {
	const { loading, orderData, dishData, fetchOrder, completeOrder, fetchDish } =
		useStoreAdmin();

	useEffect(() => {
		fetchDish()
		fetchOrder();
	}, []);

	return (
		<div className="w-[70%] m-auto">
			{loading === true ? <Spinner /> : ""}
			{orderData
				? orderData.map((el) => {
						let overallcost = 0	

						const dishCards = Object.entries(el.cart).map(([dishid,qty]) => {
							const find = dishData.find(d => d.id === dishid)
							const price = Number(find?.price) || 0
							overallcost += price * qty
							return(
							<div className="flex justify-between mb-1">
      								<div className="text-center">{`${qty}x ${find?.name}`}</div>
      								<div className="text-center">{price.toString()} KZT</div>
    						</div>
							)
						})

						const deliveryCost = 150
						const totalcost = overallcost + deliveryCost

						return (<>
							<div className="border mb-5">
								<p>OrderID: {el.id || 'N/A'}</p>
								<p>Name: {el.name || 'N/A'}</p>
								<div className="flex justify-between">
								<div className="text-yellow-300 w-[500px]">
									{dishCards}
									<div className="flex justify-between">
										<p>Delivery</p>
										<p>{deliveryCost.toString()} KZT</p>
										</div>
								</div>
								<div className="flex flex-col">
									<p className="items-center flex">Order total:</p>
									<p className="items-center flex">{totalcost}</p>
									<button className="w-40 h-15" onClick={() => completeOrder(el.id)}>Complete order</button>
								</div>
								</div>
							</div>
						</>);
					})
					: ""}
		</div>
	);
};

export default Orders;

