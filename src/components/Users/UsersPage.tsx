import React, { useEffect, useState } from 'react';
import UsersList from './UsersList';
import { UserModel } from './UserModel';
import axios from 'axios';

const UsersPage = () => {
	const [users, setUsers] = useState<UserModel[]>([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	async function fetchUsers() {
		try {
			const response = await axios.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
			setUsers(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<UsersList users={users} />
		</div>
	);
};

export default UsersPage;