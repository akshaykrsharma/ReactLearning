import { useState } from 'react';
const Section = ({ title, description, isVisible, setIsVisible }) => {
	return (
		<div className="border border-black m-2 p-2">
			<h1 className="tex-xl font-bold">{title}</h1>
			{isVisible ? (
				<button className="underline" onClick={() => setIsVisible('')}>
					Hide
				</button>
			) : (
				<button className="underline" onClick={() => setIsVisible(title)}>
					Show
				</button>
			)}
			{isVisible && <p>{description}</p>}
		</div>
	);
};

export default function Instamart() {
	const [isVisible, setVisible] = useState('');
	return (
		<div>
			<h1 className="text-3xl font-bold">INSTAMART</h1>
			<Section
				title={'About Us'}
				isVisible={isVisible == 'About Us'}
				setIsVisible={title => {
					setVisible(title == '' ? false : 'About Us');
				}}
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			></Section>
			<Section
				title={'Team'}
				isVisible={isVisible == 'Team'}
				setIsVisible={title => {
					setVisible(title == '' ? false : 'Team');
				}}
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			></Section>
			<Section
				title={'Career'}
				isVisible={isVisible == 'Career'}
				setIsVisible={title => {
					setVisible(title == '' ? false : 'Career');
				}}
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
			></Section>
		</div>
	);
}
