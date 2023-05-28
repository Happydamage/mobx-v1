import React from 'react';
import store from '../Store/store';
import { observer } from 'mobx-react';

const TodoAdd = () => {
	return (
		<div>
			<input
				placeholder={'New todo'}
				value={store.newTodo}
				onChange={(evt => (store.newTodo = evt.target.value))}
			/>
			<button onClick={() => store.addTodo()}>
				Add Todo
			</button>
		</div>
	);
};

export default observer(TodoAdd);