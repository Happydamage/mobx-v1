import React, { FC } from 'react';
import { UserModel } from './UserModel';
import User from './User';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

interface UsersListInterface {
  users: UserModel[];
}

const UsersList: FC<UsersListInterface> = ({users}) => {
	return (
		<div style={{display:'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', paddingTop: '16px'}}>
			{users.map(user =>
				<Link to={`/users/${user.id}`} key={user.id}>
					<Card width={'300px'} height={'300px'}>
						<User user={user} />
					</Card>
				</Link>
			)}
		</div>
	);
};

export default UsersList;
