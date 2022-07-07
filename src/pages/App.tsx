import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";
import Home from "./Home";

function App() {
	return (
		<div>
			<Home />
			<ToastContainer />
		</div>
	);
}

export default App;
