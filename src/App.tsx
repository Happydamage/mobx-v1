import React from 'react';
import './App.css';
import UsersPage from './components/Users/UsersPage';
import TodosPage from './components/Todos/TodosPage';
import InputExample from './components/InputExample/InputExample';

function App() {
	return (
		<div className="App">
			<InputExample />
			<UsersPage />
			<TodosPage />
		</div>
	);
}

export default App;
