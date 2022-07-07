import React from "react";
// import { Link } from "react-router-dom";

interface Props {
	handleLogout: () => void;
}

const NavBar = ({ handleLogout }: Props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<span className="navbar-brand">Todoo</span>

			<div
				className="collapse navbar-collapse user-details"
				id="navbarTogglerDemo03">
				<img
					src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
					alt="user"
					className="profileImage"
				/>

				{/* <div>
					<Link to="/" onClick={handleLogout} data-testid="logoutButton">
						Logout
					</Link>
				</div> */}
			</div>
		</nav>
	);
};

export default NavBar;
