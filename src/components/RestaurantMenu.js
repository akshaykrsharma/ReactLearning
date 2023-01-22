import React from 'react';

import { useParams } from 'react-router-dom';

export default function RestaurantMenu() {
	const { resId } = useParams();

	const data = await fetch(
		'https://www.swiggy.com/dapi/menu/v4/full?lat=26.8682407&lng=75.78838689999999&menuId=' + resId
	);

	return <div>Your Restaurant Id is {resId}</div>;
}
