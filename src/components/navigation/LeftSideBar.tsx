import { NavLink, Link } from "react-router";

export default function LeftSideBar() {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<Link to="/AddEmployee">Add employee</Link>
		</div>
	);
}
