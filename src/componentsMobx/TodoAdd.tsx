import React from 'react';
import store from '../Store/store';
import { observer } from 'mobx-react';
import CustomButton from '../components/CustomButton/CustomButton';

const TodoAdd = () => {
	return (
		<div>
			<input
				placeholder={'New todo'}
				value={store.newTodo}
				onChange={(evt => (store.newTodo = evt.target.value))}
			/>
			<CustomButton  onClick={() => store.addTodo()} >
				Add Todo
			</CustomButton>
		</div>
	);
};

export default observer(TodoAdd);