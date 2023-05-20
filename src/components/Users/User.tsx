import React, { FC } from 'react';
import { UserModel } from './UserModel';

interface UserInterface {
	user: UserModel | null;
}

const User: FC<UserInterface> = ({user}) => {
	return (
		<div>
			<div>№{user?.id}</div>
			<div>{user?.username}</div>
			<div>{user?.address.city}</div>
			<div>{user?.address.street}</div>
			<div>{user?.address.suite}</div>
			<div>{user?.address.zipcode}</div>
			<div>{user?.address.geo.lat}</div>
			<div>{user?.address.geo.lng}</div>
			<div>{user?.company.name}</div>
			<div>{user?.company.bs}</div>
			<div>{user?.company.catchPhrase}</div>
			<div>{user?.email}</div>
			<div>{user?.phone}</div>
			<div>{user?.website}</div>
		</div>
	);
};

export default User;