import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NotFound from "./NotFound";

test("NotFound page renders properly", () => {
	render(
		<Router>
			<NotFound />
		</Router>
	);
	expect(screen.getByText(/404 - Not Found!/i)).toBeInTheDocument();
});
