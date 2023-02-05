import React, { lazy, Suspense, useState, createContext } from 'react';
import ReactDOM from 'react-dom/client';
// import Header from './components/Header';
import Header from './components/Header';
import About from './components/About';
import Body from './components/Body';
import Cart from './components/Cart';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

import { Provider } from 'react-redux';

const Instamart = lazy(() => import('./components/Instamart'));

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import store from './utils/store';
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
	const [user, setUser] = useState({ name: 'akshay' });

	return (
		<Provider store={store}>
			<Header />
			<Outlet />
			<Footer />
		</Provider>
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
				path: '/',
				element: <Body />
			},
			{
				path: '/about',
				element: <About />
			},
			{
				path: '/contact',
				element: <Contact />
			},
			{
				path: '/restaurant/:resId',
				element: <RestaurantMenu />
			},
			{
				path: '/instamart',
				element: (
					<Suspense fallback={() => <h1>Loading...</h1>}>
						<Instamart />
					</Suspense>
				)
			},
			{
				path: '/cart',
				element: <Cart />
			}
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRoutes} />);
