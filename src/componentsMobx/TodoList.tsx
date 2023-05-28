import React from 'react';
import store, { TodoJH } from '../Store/store';
import Card from '../components/Card/Card';
import CustomButton from '../components/CustomButton/CustomButton';
import { observer } from 'mobx-react';
import TodoAdd from './TodoAdd';

const TodoListItems = () => {
	return (
		<>
			<TodoAdd />
			{store.todos.map((todo: TodoJH) =>
				<Card key={todo.id}>
					<input
						type={'checkbox'}
						checked={todo.done}
						onClick={() => todo.done = !todo.done}
					/>
					<input
						value={todo.text}
						onChange={(evt) => (todo.text = evt.target.value)}
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

const TodoListJH = () => {
	return (
		<TodoListItemsObserver />
	);
};

export default TodoListJH;