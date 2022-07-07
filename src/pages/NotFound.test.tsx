import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";

test("NotFound page renders properly", () => {
	render(
			<NotFound />
	);
	expect(screen.getByText(/404 - Not Found!/i)).toBeInTheDocument();
});
