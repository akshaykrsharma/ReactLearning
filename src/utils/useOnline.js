import { useEffect, useState } from 'react';
const useOnline = () => {
	const [isOnline, setOnline] = useState(true);
	const updateOnline = () => {
		setOnline(true);
	};
	const updateOffline = () => {
		setOnline(false);
	};
	useEffect(() => {
		window.addEventListener('online', updateOnline);
		window.addEventListener('offline', updateOffline);

		return () => {
			window.removeEventListener('online', updateOnline);
			window.removeEventListener('offline', updateOffline);
		};
	}, []);

	return isOnline;
};

export default useOnline;
