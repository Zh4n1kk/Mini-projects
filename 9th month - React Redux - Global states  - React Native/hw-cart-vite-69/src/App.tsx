import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { addToCart, clearCart, fetchFirebase, postFirebase, removeFromCart, setEmail, setFirstName, setLastName, setNumber, setShow } from "./store/Cart.slice";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
	const dispatch = useAppDispatch();
	const { cart, cartList, show, FirstNameInput, LastNameInput, email, number} = useAppSelector((state) => state.cart);

	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
	const numberRegex = /^[0-9]{6,15}$/;
	const totalSum = cart.reduce((a,b) => {
		return a + (b.count * Number(b.price))
	}, 0)
	const handleSubmit = () => {
		if (FirstNameInput.trim().length === 0 || number.trim().length === 0 || email.trim().length === 0 || LastNameInput.trim().length === 0) return
		if (!emailRegex.test(email)) return
		if (!numberRegex.test(number)) return
		dispatch(postFirebase({firstName: FirstNameInput, lastName: LastNameInput, number: number, email: email, cart}))
		dispatch(clearCart())
		dispatch(setShow())
	}

	useEffect(() => {
		dispatch(fetchFirebase())
	},[dispatch])

	return (
		<>
			<ModalWindow show={show} close={() => dispatch(setShow())} title="Checkout">
				<div>First Name: <input type="text" value={FirstNameInput} onChange={(e) => dispatch(setFirstName(e.target.value))}/></div>
				<div>Last Name: <input type="text" value={LastNameInput} onChange={(e) => dispatch(setLastName(e.target.value))}/></div>
				<div>Number: <input type="text" value={number} onChange={(e) => dispatch(setNumber(e.target.value))}/></div>
				<div>Email: <input type="text" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}/></div>
				<p>price: {totalSum}</p>
				<button onClick={handleSubmit}>Submit</button>
			</ModalWindow>
		<div className="container">
			<div className="items">
				{cartList.map(el => (
				<Card 
				key={crypto.randomUUID()}
					itemImg={el.itemImg}
					name={el.name}
					price={el.price}
					btnName="Add to Cart"
					onClick={() => {dispatch(addToCart({ name: el.name, price: el.price}));}}
				/>	
			))}
			</div>
			<div className="cart">
				<div className="cart_header">Cart</div>
				<div>
					{cart.map((el) => {
						return (
							<div key={crypto.randomUUID()}>
								<div>
									{el.name} x{el.count}
								</div>
								<button onClick={() => dispatch(removeFromCart({ name: el.name }))}>
									X
								</button>
							</div>
						);
					})}
				</div>
				{cart.length > 0 && (
					<div>
					<button onClick={() => dispatch(setShow())}>Place order / Checkout</button>
					<p>price: {totalSum}</p>
					</div>
				)}
			</div>
		</div>
		</>
	);
}

export default App;
