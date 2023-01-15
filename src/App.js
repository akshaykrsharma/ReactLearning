import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './components/Header';
import Header from './components/Header';
import Body from './components/Body';
/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

// Composing Comopnentss
// const Header = () => {
// 	return (
// 		<div className="header">
// 			<Title />
// 			<div className="nav-items">
// 				<ul>
// 					<li>Home</li>
// 					<li>About</li>
// 					<li>Contact</li>
// 					<li>Cart</li>
// 				</ul>
// 			</div>
// 		</div>
// 	);
// };

//Config Driven UI

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)

const Footer = () => {
	return <h4>Footer</h4>;
};

const AppLayout = () => {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
