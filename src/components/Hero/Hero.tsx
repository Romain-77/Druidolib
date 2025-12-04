// import React from "react";
import "./Hero.css";
import heroImage from "../../assets/hero-images/foret.jpg";

function Hero() {
	return (
		<div className="hero-mystic">
			<img src={heroImage} alt="Hero" className="hero-image" />
			<div className="fog"></div>
			<div className="particles"></div>
			<div className="hero-content">
				<h1>Bienvenue sur Druidolib</h1>
			</div>
		</div>
	);
}

export default Hero;
