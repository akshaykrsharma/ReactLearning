import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

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

	return (
		<>
			<div className="p-5 bg-pink-100">
				<input
					value={searchText}
					onChange={e => {
						console.log('' + e.target.value);
						setSearchText(e.target.value);
					}}
					type="text"
					placeholder="Search"
				></input>
				<button
					className="p-2 m-2 bg-purple-900 text-white rounded-xl"
					onClick={() => {
						setFilterRestaurant(filterList(restaurantListData, searchText));
					}}
				>
					Search
				</button>
			</div>
			<h1>{isOnline ? 'I am Online' : 'I am Offline'}</h1>
			<div className="flex flex-wrap justify-center">
				{filterRestaurantData.length == 0 ? (
					<Shimmer></Shimmer>
				) : (
					filterRestaurantData.map(restaurant => {
						return (
							<Link className="flex-wrap shadow-lg  m-2" to={'restaurant/' + restaurant.data.id}>
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
