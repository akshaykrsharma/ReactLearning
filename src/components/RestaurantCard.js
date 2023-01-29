const RestaurantCard = ({ name, cuisines, cloudinaryImageId, lastMileTravelString }) => {
	return (
		<div className="w-[200px]">
			<img
				className="rounded-t-lg"
				src={
					'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
					cloudinaryImageId
				}
			/>
			<h2 className="p-2">{name}</h2>
			<h3 className="p-2">{cuisines.join(', ')}</h3>
			<h4 className="p-2">{lastMileTravelString}</h4>
		</div>
	);
};

export default RestaurantCard;
