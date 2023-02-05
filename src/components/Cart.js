import { useSelector } from 'react-redux';
import FoodItem from './FoodItem';

const Cart = () => {
	const cartItems = useSelector(state => state.cart.items);
	console.log(JSON.stringify(cartItems));
	return (
		<>
			<h1 className="text-3xl font-bold">Cart</h1>
			<div>
				{cartItems.map(item => (
					<FoodItem key={item.id} {...item} />
				))}
			</div>
		</>
	);
};

export default Cart;
