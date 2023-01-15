import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
const Body = () => {
	const [searchText, setSearchText] = useState('');
	const [restaurantListData, setRestaurantList] = useState(restaurantList);
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
						setRestaurantList(filterList(restaurantList, searchText));
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{restaurantListData.map(restaurant => {
					return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
				})}
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
