// import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";
import lightImage from "../../assets/hero-images/foret.jpg";
import darkImage from "../../assets/hero-images/foret-dark.jpg";

function Hero() {
	const { t } = useTranslation();
	const theme = document.documentElement.getAttribute("data-theme");
	const heroImage = theme === "dark" ? darkImage : lightImage;

	return (
		<div className="hero-mystic">
			<img src={heroImage} alt="" className="hero-image" />
			<div className="fog"></div>
			<div className="particles"></div>
			<div className="hero-content">
				<h1>{t("home.hero.title")}</h1>
			</div>
		</div>
	);
}

export default Hero;
