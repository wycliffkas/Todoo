import React from "react";

interface Props {
	todo: string;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSave: () => void;
	isEditing: boolean;
}

const AddTodo = ({ todo, onInputChange, onSave, isEditing }: Props) => {
	return (
		<div className="input-group mb-3">
			<input
        data-testid="textInput"
				type="text"
				className="form-control"
				placeholder="Task to be done.."
				value={todo}
				onChange={onInputChange}
				name="todo"
			/>

			<div className="input-group-append">
				<button
					data-testid="save"
					className="btn btn-outline-primary"
					type="button"
					onClick={onSave}>
					{isEditing ? "Update" : "Add"}
				</button>
			</div>
		</div>
	);
};

export default AddTodo;
