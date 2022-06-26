import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";

test("AddTodo component should render and also respond to callback props", () => {
	const todo = "Running";
	const onInputChange = jest.fn();
	const onSave = jest.fn();
	const isEditing = false;
	const newItem = "Get Milk";

  render(
		<AddTodo
			todo={todo}
			onInputChange={onInputChange}
			onSave={onSave}
			isEditing={isEditing}
		/>
	);

	fireEvent.click(screen.getByTestId("save"));
	expect(onSave).toHaveBeenCalledTimes(1);
	expect(screen.getByTestId("save").textContent).toBe("Add");

	fireEvent.change(screen.getByTestId("textInput"), { target: { value: newItem } });
	expect(onInputChange).toHaveBeenCalledTimes(1);
});

test("Button label should be 'update' during edit", () => {
	const todo = "Running";
	const onInputChange = jest.fn();
	const onSave = jest.fn();
	const isEditing = true;

	render(
		<AddTodo
			todo={todo}
			onInputChange={onInputChange}
			onSave={onSave}
			isEditing={isEditing}
		/>
	);

	expect(screen.getByTestId("save").textContent).toBe("Update");
});
