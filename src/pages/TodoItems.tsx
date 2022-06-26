import React from "react";
import { Todo } from "../constants/types";
import TodoItem from "../components/TodoItem";

interface Props {
	todos: Todo[];
	onDeleteTodo: (id: string) => void;
	onEditTodo: (todo: Todo) => void;
	onUpdateStatus: (id: string) => void;
	filter: string;
}

const TodoItems = ({
	todos,
	onEditTodo,
	onDeleteTodo,
	onUpdateStatus,
	filter
}: Props) => {
	let todoItems = () => {
		if (filter === "All") {
			return todos.map((todo: Todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onEditTodo={onEditTodo}
					onDeleteTodo={onDeleteTodo}
					onUpdateStatus={onUpdateStatus}
				/>
			));
		} else if (filter === "Active") {
			let filteredTodos = todos.filter((todo) => todo.completed === false);
			return filteredTodos.map((todo: Todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onEditTodo={onEditTodo}
					onDeleteTodo={onDeleteTodo}
					onUpdateStatus={onUpdateStatus}
				/>
			));
		} else {
			let filteredTodos = todos.filter((todo) => todo.completed === true);
			return filteredTodos.map((todo: Todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onEditTodo={onEditTodo}
					onDeleteTodo={onDeleteTodo}
					onUpdateStatus={onUpdateStatus}
				/>
			));
		}
	};
	return <>{todoItems()}</>;
};

export default TodoItems;
