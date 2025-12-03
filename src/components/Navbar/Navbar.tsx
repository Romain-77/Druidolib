import "./Navbar.css";
import { NavLink } from "react-router";

function Navbar() {
	return (
		<>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/search">Search</NavLink>
			<NavLink to="/details/23">Details</NavLink>
			<NavLink to="/about">About</NavLink>
		</>
	);
}

export default Navbar;
