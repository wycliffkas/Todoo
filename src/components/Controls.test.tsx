import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("Control component renders filters and also respond to callback props", () => {
	const handleFilterChange = jest.fn();
	const filter = "All";

	render(<Controls handleFilterChange={handleFilterChange} filter={filter} />);
	expect(screen.getByText(/All/i)).toBeInTheDocument();
	expect(screen.getByText(/Active/i)).toBeInTheDocument();
	expect(screen.getByText(/Completed/i)).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("All"));
	expect(handleFilterChange).toHaveBeenCalledTimes(1);

  fireEvent.click(screen.getByTestId("Active"));
	expect(handleFilterChange).toHaveBeenCalledTimes(2);

  fireEvent.click(screen.getByTestId("Completed"));
	expect(handleFilterChange).toHaveBeenCalledTimes(3);
});
