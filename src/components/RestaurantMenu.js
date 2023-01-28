import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import constant from '../constant';

export default function RestaurantMenu() {
	const { resId } = useParams();

	const restaurant = useRestaurant(resId);

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
