import React from "react";

interface Props {
	handleFilterChange: (filter: string) => void;
	filter: string;
}

const Controls = ({ handleFilterChange, filter }: Props) => {
	return (
		<div className="controls_container">
			<span
				data-testid="All"
				onClick={() => handleFilterChange("All")}
				className={filter === "All" ? "active_filter" : undefined}>
				All
			</span>

			<span
				data-testid="Active"
				onClick={() => handleFilterChange("Active")}
				className={filter === "Active" ? "active_filter" : undefined}>
				Active
			</span>

			<span
				data-testid="Completed"
				onClick={() => handleFilterChange("Completed")}
				className={filter === "Completed" ? "active_filter" : undefined}>
				Completed
			</span>
		</div>
	);
};

export default Controls;
