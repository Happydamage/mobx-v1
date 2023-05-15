import React, { useEffect, useState } from 'react';
import TodosList from './TodosList';
import { TodoModel } from './TodoModel';
import axios from 'axios';

const TodosPage = () => {
	const [todos, setTodos] = useState<TodoModel[]>([]);

	async function fetchTodos(){
		try {
			const response = await axios.get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos?_limit=14');
			setTodos(response.data);
		} catch (e) {
			alert(e);
		}
	}

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div>
			<TodosList todos={todos} />
		</div>
	);
};

export default TodosPage;