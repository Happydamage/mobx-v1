import {makeAutoObservable} from 'mobx';

export interface TodoJH {
  id: number;
  text: string;
  done: boolean;
}

const removeTodo = (todos: TodoJH[], id: number): TodoJH[] =>
	todos.filter((todo) => todo.id !== id);

const addTodo = (todos: TodoJH[], text: string): TodoJH[] => [
	...todos,
	{
		id:Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
		text,
		done: false,
	}
];

class Store {
	todos: TodoJH[] = [];
	newTodo = '';

	constructor() {
		makeAutoObservable(this);
	}

	addTodo() {
		this.todos = addTodo(this.todos, this.newTodo);
		this.newTodo = '';
	}

	removeTodo(id: number) {
		this.todos = removeTodo(this.todos, id);
	}
}

const store = new Store();
export default store;