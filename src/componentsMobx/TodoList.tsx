import React, { FC } from 'react';
import store from '../Store/store';
import Card from '../components/Card/Card';
import CustomButton from '../components/CustomButton/CustomButton';
import { observer } from 'mobx-react';
import TodoAdd from './TodoAdd';
import { TodoModel } from '../components/Todos/TodoModel';

const TodoListItems:FC = () => {
	return (
		<>
			<TodoAdd />
			{store.todos.map((todo: TodoModel) =>
				<Card key={todo.userId}>
					<input
						checked={todo.completed}
						onClick={() => todo.completed = !todo.completed}
					/>
					<input
						value={todo.title}
						onChange={(evt) => (todo.title = evt.target.value)}
						disabled
					/>
					<CustomButton
						onClick={() => store.removeTodo(todo.id)}
					>
						Delete
					</CustomButton>
				</Card>)}
		</>
	);
};

const TodoListItemsObserver = observer(TodoListItems);

export const TodoListJH = () => {
	return (
		<TodoListItemsObserver />
	);
};