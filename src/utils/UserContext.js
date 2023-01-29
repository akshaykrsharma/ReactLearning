import { createContext } from 'react';
const UserContext = createContext({
	user: {
		name: 'Dummy Name',
		email: 'dummy@yopmail.com'
	}
});

UserContext.displayName = 'User Context';

export default UserContext;
