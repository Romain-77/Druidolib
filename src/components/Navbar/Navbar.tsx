import "./Navbar.css";
import { NavLink } from "react-router";
import logo from "../../assets/Navbar/logo.svg";
import { useState } from "react";
import Toggle from "../ToggleTheme/Toggle";
import SearchBar from "../SearchBar/SearchBar";
// import { usePractitioners } from "../../context/Practitioners";


function Navbar() {
	// const { searchTerm, setSearchTerm } = usePractitioners();
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};
	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<header className="navbar">
			{/* accessibility: avoid link for screen reader and keyboard*/}
			<a href="#main-content" className="navbar-skipLink">
				Aller au contenu principal
			</a>
			<div className="navbar-inner">
				<div className="navbar-brand">
					<NavLink to="/" className="navbar-logo" onClick={handleLinkClick}>
						<img src={logo} alt="Druidolib" />
					</NavLink>
				</div>
				{/* burger mobile menu*/}
				<button
					type="button"
					className="navbar-burger"
					aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
					aria-expanded={isOpen}
					aria-controls="nav-main-menu"
					onClick={handleToggle}
				>
					{" "}
					<span className="navbar-burger-bar" />
					<span className="navbar-burger-bar" />
					<span className="navbar-burger-bar" />
				</button>
				{/* Menu principal */}
				{/* <div className="navbar-search">
					<SearchBar />
				</div> */}
				<nav
					id="navbar-main-menu"
					className={`navbar-nav ${isOpen ? "navbar-nav--open" : ""}`}
				>
					<ul className="navbar-list">
						<li>
							<NavLink to="/" className="navbar-link" onClick={handleLinkClick}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className="navbar-link"
								onClick={handleLinkClick}
							>
								About
							</NavLink>
						</li>
						{/* Toggle light dark theme */}
						<li>
							<div className="navbar-toggle">
								<Toggle />
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		// <>
		// 	<NavLink to="/search">Search</NavLink>
		// 	<NavLink to="/details/23">Details</NavLink>
		// </>
	);
}

export default Navbar;
