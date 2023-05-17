import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from '../Users/UsersPage';
import TodosPage from '../Todos/TodosPage';
import InputExample from '../InputExample/InputExample';
import Navbar from '../Navbar/Navbar';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path={'/users'} element={<UsersPage />} />
				<Route path={'/todos'} element={<TodosPage />} />
				<Route path={'/inputs'} element={<InputExample />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
