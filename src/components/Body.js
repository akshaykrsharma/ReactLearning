import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
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
	return (
		<>
			<div className="search-container">
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
					onClick={() => {
						setFilterRestaurant(filterList(restaurantListData, searchText));
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{filterRestaurantData.length == 0 ? (
					<Shimmer></Shimmer>
				) : (
					filterRestaurantData.map(restaurant => {
						return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
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
