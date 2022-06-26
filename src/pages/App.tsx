import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import Login from "./Login";
import NotFound from "./NotFound";
import SignUp from "./SignUp";

function App() {
	const [isloggedIn, setIsloggedIn] = useState(() => {
		const isUserLoggedIn = localStorage.getItem("isLogggedIn");
		if (isUserLoggedIn) {
			return JSON.parse(isUserLoggedIn);
		} else {
			return false;
		}
	});

	return (
		// @ts-ignore
		<Router>
			<Routes>
				<Route path="/" element={isloggedIn ? <Home /> : <Login />} />
				<Route path="/register" element={<SignUp />} />
				<Route path="/home" element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
