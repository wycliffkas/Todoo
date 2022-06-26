import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
	username: string;
	password: string;
}

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const handleLogin = async () => {
		const users = JSON.parse(localStorage.getItem("users") || "[]");
		const user = await users.filter(
			(user: User) => user.username === username && user.password === password
		);

		if (!!user.length) {
			localStorage.setItem("isLogggedIn", JSON.stringify(true));
			handleReset();
			return navigate("/home");
		}
		setError(true);
		handleReset();
	};

	const handleReset = () => {
		setUsername("");
		setPassword("");
	};

	return (
		<div className="formWrapper">
			<h5 className="text-center">Login</h5>

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

				{error && (
					<small id="emailHelp" className="error-text">
						Wrong password or username. Try again.
					</small>
				)}
			</div>

			<div className="link-wrapper">
				<Link to="/register">Not a member?</Link>
			</div>

			<button
				type="submit"
				className="btn btn-primary btn-block"
				onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default Login;
