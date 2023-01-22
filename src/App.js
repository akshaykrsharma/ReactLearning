import React from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './components/Header';
import Header from './components/Header';
import About from './components/About';
import Body from './components/Body';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
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
			<Outlet />
			<Footer />
		</>
	);
};

function renderError() {
	return <h1>404: Not Found</h1>;
}

const AppRoutes = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: renderError(),
		children: [
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/',
				element: <Body />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRoutes} />);
