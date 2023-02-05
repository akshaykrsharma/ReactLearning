const FoodItem = props => {
	const { name, cloudinaryImageId, category } = props;

	return (
	<div className="p-3 border-slate-400">
			<h3>{name}</h3>
			<h3>{category}</h3>
		</div>
	);
};

export default FoodItem;
