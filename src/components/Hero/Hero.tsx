// import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import heroImage from "../../assets/hero-images/foret.jpg";

function Hero() {
	const { t } = useTranslation();
	return (
		<div className="hero-mystic">
			<img src={heroImage} alt="Hero" className="hero-image" />
			<div className="fog"></div>
			<div className="particles"></div>
			<div className="hero-content">
				<h1>{t("home.hero.title")}</h1>
			</div>
		</div>
	);
}

export default Hero;
