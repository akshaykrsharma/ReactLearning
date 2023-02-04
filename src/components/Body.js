import { useContext } from 'react';
import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';

const Body = () => {
	const [searchText, setSearchText] = useState('');
	const [restaurantListData, setRestaurantList] = useState([]);
	const [filterRestaurantData, setFilterRestaurant] = useState([]);
	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8682407&lng=75.78838689999999&page_type=DESKTOP_WEB_LISTING'
		);

		console.log(data);
		const json = await data.json();

		setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
		setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);

		console.log(json);
	}

	const isOnline = useOnline();
	const data = useContext(UserContext);

	return (
		<>
			<div className="p-5 bg-slate-200 mt-2">
				<input
					className="p-2 px-5 rounded-2xl"
					value={searchText}
					onChange={e => {
						console.log('' + e.target.value);
						setSearchText(e.target.value);
					}}
					type="text"
					placeholder="Search"
				></input>

				{/* <input onChange={e => data.setUser({ name: e.target.value })} value={data.user.name}></input> */}

				<button
					className="px-4 py-1 m-2 bg-purple-900 text-white rounded-full"
					onClick={() => {
						setFilterRestaurant(filterList(restaurantListData, searchText));
					}}
				>
					Search
				</button>
			</div>
			<h1 className="p-2">{isOnline ? 'I am Online' : 'I am Offline'}</h1>
			<div className="flex flex-wrap justify-center">
				{filterRestaurantData.length == 0 ? (
					<Shimmer></Shimmer>
				) : (
					filterRestaurantData.map(restaurant => {
						return (
							<Link
								className="flex-wrap shadow-lg  m-2  rounded-lg border-cyan-50"
								to={'restaurant/' + restaurant.data.id}
							>
								<RestaurantCard {...restaurant.data} key={restaurant.data.id} />
							</Link>
						);
					})
				)}
			</div>
		</>
	);
};

function filterList(restaurantList, searchText) {
	if (!!searchText) {
		return restaurantList.filter(item => item.data.name.toLowerCase().includes(searchText.toLowerCase()));
	} else {
		return restaurantList;
	}
}

export default Body;
