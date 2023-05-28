import React, { useEffect, useState } from 'react';
import TodosList from './TodosList';
import { TodoModel } from './TodoModel';
import axios from 'axios';
import TodoListJH from '../../componentsMobx/TodoList';
import store from '../../Store/store';
import CustomButton from '../CustomButton/CustomButton';

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

	const onLoad = () => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=14')
			.then((resp) => resp.json())
			.then((data) => (store.todos = data));
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<div>
			<TodosList todos={todos} />
			<TodoListJH />
			<CustomButton onClick={onLoad}>Load Todos</CustomButton>
		</div>
	);
};

export default TodosPage;