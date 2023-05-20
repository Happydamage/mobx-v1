import React, { useEffect, useState } from 'react';
import { UserModel } from './UserModel';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import User from './User';

const UserItemPage = () => {
	const [user, setUser] = useState<UserModel | null>(null);
	const params = useParams();

	useEffect(() => {
		fetchUser();
	}, []);

	async function fetchUser() {
		try {
			const response = await axios.get<UserModel>('https://jsonplaceholder.typicode.com/users/' + params.id);
			setUser(response.data);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<div>
			<button>Back</button>
			<User user={user} />
		</div>
	);
};

export default UserItemPage;