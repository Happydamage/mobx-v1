import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import CustomButton from '../CustomButton/CustomButton';
import { cn } from '@bem-react/classname';

const cnNavbar = cn('Navbar');

const Navbar = () => {
	return (
		<div className={cnNavbar()}>
			<CustomButton>
				<Link to={'/'}>Home</Link>
			</CustomButton>
			<CustomButton>
				<Link to={'/users'}>Users</Link>
			</CustomButton>
			<CustomButton>
				<Link to={'/todos'}>Todos</Link>
			</CustomButton>
			<CustomButton>
				<Link to={'/inputs'}>Inputs</Link>
			</CustomButton>
		</div>
	);
};

export default Navbar;
