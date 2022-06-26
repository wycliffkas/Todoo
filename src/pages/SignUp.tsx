import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleRegister = () => {
		if (username === "" && password === "") return;

		const user = { username, password };

		const users = JSON.parse(localStorage.getItem("users") || "[]");
		users.push(user);
		localStorage.setItem("users", JSON.stringify(users));

		handleReset();
		return navigate("/home");
	};

	const handleReset = () => {
		setUsername("");
		setPassword("");
	};

	return (
		<div className="formWrapper">
			<h5 className="text-center">Sign up</h5>

			<div className="form-group">
				<label>Username</label>
				<input
					type="text"
					value={username}
					placeholder="enter a username"
					onChange={({ target }) => setUsername(target.value)}
					className="form-control"
				/>
			</div>

			<div className="form-group">
				<label>Password</label>
				<input
					type="password"
					value={password}
					placeholder="enter a password"
					onChange={({ target }) => setPassword(target.value)}
					className="form-control"
				/>
			</div>

			<div className="link-wrapper">
				<Link to="/">Already a member?</Link>
			</div>

			<button
				data-testid="submit"
				type="submit"
				className="btn btn-primary mr-3"
				onClick={handleRegister}>
				Register
			</button>

			<button
				data-testid="reset"
				type="submit"
				className="btn btn-outline-dark"
				onClick={handleReset}>
				Cancel
			</button>
		</div>
	);
};

export default SignUp;
