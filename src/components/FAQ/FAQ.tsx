import { useState } from "react";
import "./FAQ.css";

function FAQ() {
	const [activeId, setActiveId] = useState<number | null>(null);

	const questions = [
		{
			id: 1,
			question:
				"J'ai vu qu'un Shaman accepte les paiements en chèvres. Est-ce sérieux ?",
			reponse:
				"Oui, le troc est courant ! Une chèvre laitière est une monnaie honorable. Vérifiez juste qu'elle ne soit pas ensorcelée, sinon la consultation coûte double !",
		},
		{
			id: 2,
			question:
				"Je souffre d'une toux qui fait trembler tout le village. Quel Druide peut me soigner rapidement ?",
			reponse:
				"Nos Druides sont les meilleurs ! Ils vous feront une décoction à base de mousse de chêne et de bave de crapaud (on rigole, c'est juste de l'ortie).",
		},
		{
			id: 3,
			question:
				"Je me suis cassé la jambe en tombant de mon tas de fumier. La Sorcière peut-elle me soigner sans hurler ?",
			reponse:
				"Elle ne hurle pas, elle 'harmonise les os'. Vous oublierez la douleur... et votre nom pendant une heure, grâce au cataplasme magique.",
		},
		{
			id: 4,
			question:
				"Les potions des Druides sont-elles buvables, ou faut-il faire semblant ?",
			reponse:
				"Elles ont le goût de chaussettes mouillées. Buvez vite, sinon le Druide, vexé, vous donnera une potion encore pire.",
		},
		{
			id: 5,
			question:
				"Mon cochon est apathique et refuse de se rouler dans la boue. Est-ce que Druidolib peut le soigner ?",
			reponse:
				"Oui ! Nos Druides Vétérinaires soignent le 'Mauvais Œil d'envieux' chez les bêtes. Une infusion de plantain et trois incantations suffiront. Votre porcinet va vite retrouver la boue.",
		},
	];

	const toggleQuestion = (id: number) => {
		setActiveId(activeId === id ? null : id);
	};

	return (
		<section className="faq-section">
			<h3>Nos questions les plus fréquentes</h3>

			<div className="faq-liste">
				{questions.map((item) => (
					<div
						key={item.id}
						className={`faq-item ${activeId === item.id ? "active" : ""}`}
					>
						<button
							type="button"
							className="faq-questions"
							onClick={() => toggleQuestion(item.id)}
						>
							{item.question}
							<span className="faq-icon">
								{activeId === item.id ? "-" : "+"}
							</span>
						</button>

						{activeId === item.id && (
							<div className="faq-reponses">
								<p>{item.reponse}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}

export default FAQ;
