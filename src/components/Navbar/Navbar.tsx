import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { cn } from '@bem-react/classname';
import { Button } from '@mui/material';

const cnNavbar = cn('Navbar');

const Navbar = () => {
	return (
		<div className={cnNavbar()}>
			<Button variant='contained'>
				<Link to={'/'}>Home</Link>
			</Button>
			<Button variant='contained'>
				<Link to={'/users'}>Users</Link>
			</Button>
			<Button variant='contained'>
				<Link to={'/todos'}>Todos</Link>
			</Button>
			<Button variant='contained'>
				<Link to={'/inputs'}>Inputs</Link>
			</Button>
			<Button variant='contained'>
				<Link to={'/codewars'}>CodeWars</Link>
			</Button>
		</div>
	);
};

export default Navbar;
