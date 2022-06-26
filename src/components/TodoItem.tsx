import React from "react";
import { Todo } from "../constants/types";

interface Props {
	todo: Todo;
	onDeleteTodo: (id: string) => void;
	onEditTodo: (todo: Todo) => void;
	onUpdateStatus: (id: string) => void;
}

const TodoItem = ({
	todo,
	onDeleteTodo,
	onEditTodo,
	onUpdateStatus
}: Props) => {
	return (
		<div className="task_container">
			<input
        data-testid="checkbox"
				type="checkbox"
				className="check_box"
				checked={todo.completed}
				onChange={() => onUpdateStatus(todo.id)}
			/>
			<p className={todo.completed ? "task_text line_through" : "task_text"}>
				{todo.task}
			</p>

			<button
				onClick={() => onEditTodo(todo)}
				className="edit_task"
				data-testid="edit">
				<i className="bi bi-pencil" style={{ fontSize: "16px" }} />
			</button>

			<button
				onClick={() => onDeleteTodo(todo.id)}
				className="remove_task"
				data-testid="delete">
				<i className="bi bi-x" style={{ fontSize: "26px" }} />
			</button>
		</div>
	);
};

export default TodoItem;
