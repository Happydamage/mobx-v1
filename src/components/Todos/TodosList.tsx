import React from 'react';
import { TodoModel } from './TodoModel';
import Card, { Theme } from '../Card/Card';
import TodoItem from './TodoItem';

interface TodoListProps {
	todos: TodoModel[];
}

const TodosList = (props: TodoListProps) => {
	return (
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', paddingTop: '16px'}}>
			{props.todos.map(todo =>
				<Card key={todo.id} width={'200px'} theme={Theme.PRIMARY}>
					<TodoItem todo={todo} />
				</Card>)}
		</div>
	);
};

export default TodosList;
