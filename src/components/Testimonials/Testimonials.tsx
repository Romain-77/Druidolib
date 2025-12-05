import { useTranslation } from "react-i18next";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";
import Chatelaine from "../../assets/avatars-clients/Chatelaine.jpg";
import Forgeron from "../../assets/avatars-clients/Forgeron.jpg";
import Manant from "../../assets/avatars-clients/Manant.jpg";
import Musicienne from "../../assets/avatars-clients/Musicienne.jpg";

function Testimonials() {
	const { t } = useTranslation();
	return (
		<section className="testimonials-section">
			<h2>Ce que disent nos clients</h2>
			<div className="testimonials-display">
				<TestimonialCard
					image={Chatelaine}
					rating={5}
					commentaire={t("about.testimonials.chatelaine.comment")}
					auteur="Dame Huguette L."
				/>
				<TestimonialCard
					image={Forgeron}
					rating={3}
					commentaire={t("about.testimonials.forgeron.comment")}
					auteur="Thibault S."
				/>
				<TestimonialCard
					image={Manant}
					rating={4}
					commentaire={t("about.testimonials.manant.comment")}
					auteur="Gontran F."
				/>
				<TestimonialCard
					image={Musicienne}
					rating={5}
					commentaire={t("about.testimonials.musicienne.comment")}
					auteur="Mélisandre D."
				/>
			</div>
		</section>
	);
}

export default Testimonials;
