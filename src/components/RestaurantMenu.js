import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import constant from '../constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export default function RestaurantMenu() {
	const { resId } = useParams();

	const restaurant = useRestaurant(resId);
	const dispatch = useDispatch();
	function handleAddItem(item) {
		dispatch(addItem(item));
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
					<div className="flex m-2">
						<li key={item.id}>{item.name}-</li>
						<button
							className="shadow-lg bg-green-400  rounded-lg border-cyan-50 px-5 mx-1"
							onClick={() => handleAddItem(item)}
						>
							Add
						</button>
					</div>
				))}
			</ul>
		</div>
	);
}
