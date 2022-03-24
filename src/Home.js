// import React from 'react'

// function Home(){
// 	return(
// 		<div> 
// 			<h1> Welcome to Budget Tracker!</h1>
// 		</div>
// 	);
// }

// export default Home;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";
function Home() {

	let route = useNavigate();
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink exact to="/BudgetTracker" className="nav-logo">
						Go to Budget Tracker
						<i className="fas fa-code"></i>
					</NavLink>


					<div className="nav-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
				</div>
			</nav>
			<div className="Login">
				<Form onSubmit={handleSubmit}>
					<Form.Group size="lg" controlId="email">
						<Form.Label>Email</Form.Label>
						<Form.Control
							autoFocus
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group size="lg" controlId="password">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button block size="lg" type="submit" disabled={!validateForm()}
					onClick={() => {
						route("/BudgetTracker");
					}}>
						Login
					</Button>
				</Form>
			</div>
		
		</>
	);
}


export default Home;