import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TodoItem from "./TodoItem";

test("TodoItem component should render properly and respond to callback props", () => {
	const todo = {id: "1233", task:"Running", completed: false};
	const onEditTodo = jest.fn();
	const onUpdateStatus = jest.fn();
	const onDeleteTodo = jest.fn();

  render(
		<TodoItem
    todo={todo}
    onDeleteTodo={onDeleteTodo}
    onEditTodo={onEditTodo}
    onUpdateStatus={onUpdateStatus}
		/>
	);

	fireEvent.click(screen.getByTestId("edit"));
	expect(onEditTodo).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByTestId("delete"));
	expect(onDeleteTodo).toHaveBeenCalledTimes(1);

  const updateStatusCheckbox = screen.getByTestId("checkbox")
  fireEvent.click(updateStatusCheckbox)
	expect(onUpdateStatus).toHaveBeenCalledTimes(1);
});
