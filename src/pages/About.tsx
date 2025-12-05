import { useTranslation } from "react-i18next";
import "./About.css";
import FAQ from "../components/FAQ/FAQ";
import Members from "../components/Members/Members";
import Testimonials from "../components/Testimonials/Testimonials";

function About() {
	const { t } = useTranslation();
	return (
		<section>
			<div className="about-header">
				<h1 className="about-title">{t("about.title")}</h1>
				<p className="about-description">{t("about.intro")}</p>
			</div>
			<Members />
			<FAQ />
			<Testimonials />
		</section>
	);
}

export default About;
