import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { TodoModel } from './TodoModel';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../Card/Card';

const TodoItemPage = () => {
	const [todo, setTodo] = useState<TodoModel | null>(null);
	const params = useParams();

	useEffect(() => {
		fetchTodo();
	}, []);

	async function fetchTodo() {
		try {
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + params.id);
			setTodo(response.data);
		} catch(e) {
			alert(e);
		}
	}

	return (
		<Card>
			<TodoItem todo={todo} />
		</Card>
	);
};

export default TodoItemPage;