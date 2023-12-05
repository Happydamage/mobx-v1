import React, { useEffect, useState } from 'react';
import TodosList from './TodosList';
import { schemaTodo, TodoModel } from './TodoModel';
import axios from 'axios';
import store from '../../Store/store';
import CustomButton from '../CustomButton/CustomButton';
import { TodoListJH } from '../../componentsMobx/TodoList';
import { ZodError } from 'zod';

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
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((resp) => resp.json())
			.then((data) => (store.todos = data));
	};

	const onLoad2 = () => {
		fetch('https://jsonplaceholder.typicode.com/todo?_limit=12')
			.then((resp) => resp.json())
			.then(result => schemaTodo.array().parseAsync(result))
			.then((data) => {
				setTodos(data);
			})
			.catch(e => {
				if (e instanceof ZodError) {
					alert('шиш');
				}
			});
	};

	useEffect(() => {
		// fetchTodos();
	}, []);

	return (
		<div>
			<TodosList todos={todos} />
			<TodoListJH />
			<CustomButton onClick={onLoad}>Load Todos JH</CustomButton>
			<CustomButton onClick={onLoad2}>Load Todos</CustomButton>
		</div>
	);
};

export default TodosPage;