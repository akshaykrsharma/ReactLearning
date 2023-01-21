function Shimmer() {
	return (
		<>
			{Array(10)
				.fill(1)
				.map(item => (
					<div className="shimmer" />
				))}
		</>
	);
}
export default Shimmer;
