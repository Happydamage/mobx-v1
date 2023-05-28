import React from 'react';
import { TodoModel } from './TodoModel';
import Card, { Theme } from '../Card/Card';
import TodoItem from './TodoItem';
import { Link } from 'react-router-dom';

interface TodoListProps {
	todos: TodoModel[];
}

const TodosList = (props: TodoListProps) => {
	return (
		<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', paddingTop: '16px'}}>
			{props.todos.map(todo =>
				<Link to={`/todos/${todo.id}`} key={todo.id}>
					<Card width={'200px'} height={'100px'} theme={Theme.PRIMARY}>
						<TodoItem todo={todo} />
					</Card>
				</Link>)}
		</div>
	);
};

export default TodosList;
