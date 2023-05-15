import React from 'react';
import './App.css';
import UsersPage from './components/Users/UsersPage';
import TodosPage from './components/Todos/TodosPage';

function App() {
	return (
		<div className="App">
			<UsersPage />
			<TodosPage />
		</div>
	);
}

export default App;
