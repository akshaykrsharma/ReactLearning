import { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => (
	<a href="/">
		<img
			className="h-28 p-2"
			alt="logo"
			src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
		/>
	</a>
);

const Header = () => {
	const cartData = useSelector(state => state.cart.items);
	const context = useContext(UserContext);
	return (
		<div className="flex justify-between bg-red-50 shadow-lg">
			<Title />
			<div>
				<ul className="flex justify-between py-10">
					<li className="px-2">
						<Link to="/">Home</Link>
					</li>
					<li className="px-2">
						<Link to="/about">About</Link>
					</li>
					<li className="px-2">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="px-2">
						<Link to="/instamart">Instamart</Link>
					</li>
					<li className="px-2">
						<Link to="/cart">{`Cart - ${cartData.length} Items`}</Link>
					</li>
				</ul>
			</div>

			<div>
				<h3>{context.user.name}</h3>
				<h3>{context.user.email}</h3>

				<button className="p-3">Login</button>
			</div>
		</div>
	);
};

export default Header;
