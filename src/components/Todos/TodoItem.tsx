import React from 'react';
import { TodoModel } from './TodoModel';

interface TodoItemProps {
  todo: TodoModel;
}

const TodoItem = (props: TodoItemProps) => {
	return (
		<div>
			<div>{props.todo.userId} / {props.todo.id}</div>
			<div>{props.todo.title}</div>
			<input type='checkbox' checked={props.todo.completed} />
		</div>
	);
};

export default TodoItem;