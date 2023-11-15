import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from '../Users/UsersPage';
import TodosPage from '../Todos/TodosPage';
import InputExample from '../InputExample/InputExample';
import Navbar from '../Navbar/Navbar';
import UserItemPage from '../Users/UserItemPage';
import TodoItemPage from '../Todos/TodoItemPage';
import CodeWars from '../CodeWars/CodeWars';
import { FormHook } from '../FormHook/FormHook';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path={'/users'} element={<UsersPage />} />
				<Route path={'/users/:id'} element={<UserItemPage />} />

				<Route path={'/todos'} element={<TodosPage />} />
				<Route path={'/todos/:id'} element={<TodoItemPage />} />

				<Route path={'/inputs'} element={<InputExample />} />
				<Route path={'/code-wars'} element={<CodeWars />} />
				<Route path={'/react-form-hook'} element={<FormHook />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
