import { useState } from "react";
import { Link } from "react-router";

export default function LeftSideBar() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("eorLoggedIn")
	);

	return (
		<nav className="leftSideBar">
			<Link to="/">Home</Link>
			{!loggedIn ? <Link to="./Login">Login</Link> : null}
			{loggedIn ? <Link to="/AddEmployee">Add employee</Link> : null}
		</nav>
	);
}
