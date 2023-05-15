import React, { FC } from 'react';
import { UserModel } from './UserModel';
import User from './User';
import Card from '../Card/Card';

interface UsersListInterface {
  users: UserModel[];
}

const UsersList: FC<UsersListInterface> = ({users}) => {
	return (
		<div style={{display:'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', padding: '16px'}}>
			{users.map(user =>
				<Card key={user.id} width={'300px'} height={'300px'}>
					<User user={user} />
				</Card>
			)}
		</div>
	);
};

export default UsersList;