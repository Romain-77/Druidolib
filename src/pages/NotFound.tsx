import { Link } from "react-router";

import "../pages/NotFound.css";

function NotFound() {
	return (
		<section className="not-found">
			<div className="crystal-ball">
				<div className="glow"></div>
				<div className="mist"></div>
				<div className="sparkles"></div>
			</div>
			<h1 className="not-found-title">404</h1>
			<h2 className="not-found-title2">Les visions sont floues…</h2>
			<p className="not-found-comment">
				La page que vous cherchez se cache derrière un voile d’illusions.
			</p>
			<Link className="not-found-link" to="/">
				Retour au sanctuaire
			</Link>
		</section>
	);
}

export default NotFound;
