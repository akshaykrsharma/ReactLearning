import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => {
	// It's Component
	return <h1 key="key1">Namaste React</h1>;
};

// heading2 is JSON Object
const heading2 = <h2>Hello World</h2>;

const HeaderComponent = () => {
	// It's Component
	return (
		<div>
			<Title />
			{/*Function Component can be called in This way*/}
			{Title()}
			{heading2}
		</div>
	);
};

//COMPONENT COMPOSITION : PARSING COMPONENT INTO ANOTHER COMPONENT
console.log('I am here to be removed by parcel');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeaderComponent />);
