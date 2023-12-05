import {makeAutoObservable} from 'mobx';
import { TodoModel } from '../components/Todos/TodoModel';

const removeTodo = (todos: TodoModel[], id: number): TodoModel[] =>
	todos.filter((todo) => todo.id !== id);

const addTodo = (todos: TodoModel[], title: string): TodoModel[] => [
	...todos,
	{
		id:Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
		userId: 0,
		title,
		completed: false,
	}
];

class Store {
	todos: TodoModel[] = [];
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