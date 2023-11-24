import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { ExampleModel } from './exampleModel';
import axios from 'axios';

const FormFields = () => {
	const [users, setUsers] = useState<ExampleModel[] | null>(null);

	async function fetchUsers() {
		try {
			const response = await axios.get<ExampleModel[]>('http://localhost:3000/users');
			setUsers(response.data);
		} catch (e) {
			alert(e);
		}
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			{users?.map(user =>
				<TextField
					key={user.id}
					variant={'outlined'}
				/>)}
		</div>
	);
};

export default FormFields;