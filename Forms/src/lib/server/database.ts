type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

let todos: Todo[] = [
	{
		id: Date.now(),
		text: 'learn svelte',
		completed: false
	},
	{
		id: Date.now(),
		text: 'learn sveltekit',
		completed: false
	}
];

export function getTodos(): Todo[] {
	return todos;
}

export function addTodo(text: string) {
	const todo = {
		id: Date.now(),
		text,
		completed: false
	};

	todos.push(todo);
}

export function removeTodo(id: number) {
	todos = todos.filter((todo) => todo.id !== id);
}

export function clearTodos() {
	todos = [];
}
