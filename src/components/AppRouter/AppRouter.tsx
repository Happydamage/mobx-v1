import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from '../Users/UsersPage';
import TodosPage from '../Todos/TodosPage';
import InputExample from '../InputExample/InputExample';
import Navbar from '../Navbar/Navbar';
import UserItemPage from '../Users/UserItemPage';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path={'/users'} element={<UsersPage />} />
				<Route path={'/users/:id'} element={<UserItemPage />} />

				<Route path={'/todos'} element={<TodosPage />} />
				{/*<Route path={'/todos/:id'} element={<TodoItemPage />} />*/}

				<Route path={'/inputs'} element={<InputExample />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
