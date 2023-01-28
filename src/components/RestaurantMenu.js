import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import constant from '../constant';

export default function RestaurantMenu() {
	const { resId } = useParams();

	const [restaurant, setRestaurantMenu] = useState(null);

	useEffect(() => {
		getRestaurantMenu(resId);
	}, []);

	async function getRestaurantMenu(resId) {
		const data = await fetch(
			'https://www.swiggy.com/dapi/menu/v4/full?lat=26.8682407&lng=75.78838689999999&menuId=' + resId
		);

		console.log(data);
		const json = await data.json();

		setRestaurantMenu(json.data);
	}

	return !restaurant ? (
		<Shimmer></Shimmer>
	) : (
		<div>
			<h1>Restaurant ID: {resId}</h1>
			<h2>{restaurant?.name}</h2>
			<img
				src={
					'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
					restaurant?.cloudinaryImageId
				}
			></img>
			<h3>{restaurant?.costForTwoMsg}</h3>
			<h1>Menu</h1>
			<ul>
				{Object.values(restaurant?.menu?.items).map(item => (
					<li>{item.name}</li>
				))}
			</ul>
		</div>
	);
}
