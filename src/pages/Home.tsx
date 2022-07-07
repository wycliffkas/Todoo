import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddTodo from "../components/AddTodo";
import Controls from "../components/Controls";
import { Todo } from "../constants/types";
import TodoItems from "./TodoItems";

interface State {
	task: string;
	id?: string;
}

const Home = () => {
	const [todos, setTodos] = useState(() => {
		const savedTodos = localStorage.getItem("todos");
		if (savedTodos) {
			return JSON.parse(savedTodos);
		} else {
			return [];
		}
	});

	const [todo, setTodo] = useState<State>({ task: "" });
	const [isEditing, setIsEditing] = useState(false);
	const [filter, setFilter] = useState("All");

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const handleSave = () => {
		if (todo.task === "") return;

		if (isEditing) {
			const originalTasks = [...todos];
			const index = originalTasks.findIndex((task) => task.id === todo.id);

			originalTasks[index] = todo;

			setTodos(originalTasks);
			toast.success("Todo editted successfully");
			setIsEditing(false);
		} else {
			setTodos([
				...todos,
				{
					id: new Date(),
					task: todo.task.trim(),
					completed: false
				}
			]);
			toast.success("Todo added successfully");
		}

		setTodo({ task: "" });
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo((prev) => ({ ...prev, task: e.target.value }));
	};

	const handleEditTodo = (todo: Todo) => {
		setIsEditing(true);
		setTodo(todo);
	};

	const handleDeleteTodo = (id: string) => {
		const removeItem = todos.filter((todo: Todo) => {
			return todo.id !== id;
		});
		setTodos(removeItem);
		toast.success("Todo deleted successfully");
	};

	const handleUpdateStatus = (id: string) => {
		const originalTasks = [...todos];
		const index = originalTasks.findIndex((task) => task.id === id);
		originalTasks[index].completed = !originalTasks[index].completed;
		setTodos(originalTasks);
	};

	const handleFilterChange = (filter: string) => setFilter(filter);

	return (
		<>
			<div className="wrapper">
				<h2>ToDoo</h2>

				<div className="card container">
					<AddTodo
						todo={todo.task}
						onInputChange={handleInputChange}
						onSave={handleSave}
						isEditing={isEditing}
					/>

					{!!todos.length && (
						<Controls handleFilterChange={handleFilterChange} filter={filter} />
					)}

					{!!todos.length ? (
						<TodoItems
							todos={todos}
							onEditTodo={handleEditTodo}
							onDeleteTodo={handleDeleteTodo}
							onUpdateStatus={handleUpdateStatus}
							filter={filter}
						/>
					) : (
						<p>No Items</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Home;
