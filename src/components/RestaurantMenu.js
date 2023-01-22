import React from 'react';

import { useParams } from 'react-router-dom';

export default function RestaurantMenu() {
	const { resId } = useParams();

	return <div>Your Restaurant Id is {resId}</div>;
}
