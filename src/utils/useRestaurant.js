import { useState, useEffect } from 'react';

const useRestaurant = resId => {
	const [restaurant, setRestaurant] = useState(null);
	useEffect(() => {
		fetchRestaurantMenu(resId);
	}, []);

	async function fetchRestaurantMenu(resId) {
		const data = await fetch(
			'https://www.swiggy.com/dapi/menu/v4/full?lat=26.8682407&lng=75.78838689999999&menuId=' + resId
		);
		const json = await data.json();
		console.log(json.data);
		setRestaurant(json.data);
	}

	return restaurant;
};

export default useRestaurant;
