import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("NavBar component should render and also respond to callback props", () => {
	const handleLogout = jest.fn();

	render(<NavBar handleLogout={handleLogout} />);

	fireEvent.click(screen.getByTestId("logoutButton"));
	expect(handleLogout).toHaveBeenCalledTimes(1);

  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
});
