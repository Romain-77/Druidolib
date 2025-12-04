import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";
import Chatelaine from "../../assets/avatars-clients/Chatelaine.jpg";
import Forgeron from "../../assets/avatars-clients/Forgeron.jpg";
import Manant from "../../assets/avatars-clients/Manant.jpg";
import Musicienne from "../../assets/avatars-clients/Musicienne.jpg";

function Testimonials() {
	return (
		<section className="testimonials-section">
			<h2>Ce que disent nos clients</h2>
			<div className="testimonials-display">
				<TestimonialCard
					image={Chatelaine}
					rating={5}
					commentaire="Mon fils souffrait de la fièvre des marais. J'ai consulté une Sorcière via Druidolib qui m'a préparé une tisane spécifique. Le résultat a été rapide et les instructions étaient très claires. Le système de prise de rendez-vous est très pratique pour les dames qui n'ont pas toujours le temps."
					auteur="Dame Huguette L."
				/>
				<TestimonialCard
					image={Forgeron}
					rating={3}
					commentaire="Mes heures devant l'enclume me donnaient de vives douleurs. J'ai trouvé un Druide spécialisé en massages. Il a utilisé des onguents à base de plantes locales. Le soulagement est notable, même si le prix du transport des herbes fraîches est un peu élevé."
					auteur="Thibault S."
				/>
				<TestimonialCard
					image={Manant}
					rating={4}
					commentaire="J'étais indécis sur l'emplacement de ma nouvelle parcelle. J'ai eu une consultation rapide avec un Devin. Il m'a orienté vers le terrain le plus fertile. Une prédiction simple, mais qui a eu un impact énorme. Je recommande pour les conseils agricoles."
					auteur="Gontran F."
				/>
				<TestimonialCard
					image={Musicienne}
					rating={5}
					commentaire="L'Apothicaire proposé sur le site avait des remèdes excellents contre mes rhumatismes. Par contre, il a mis trois jours à répondre à mon message par pigeon voyageur (j'aurais aimé une réponse plus rapide). Le produit est parfait, l'attente un peu moins."
					auteur="Mélisandre D."
				/>
			</div>
		</section>
	);
}

export default Testimonials;
