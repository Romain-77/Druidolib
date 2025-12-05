import { useState } from "react";
import "./Members.css";
import Aurélie from "../../assets/Members/Aurélie_Apothicaire.jpg";
import Juliette from "../../assets/Members/Juliette_Chaman.png";
import Léa from "../../assets/Members/Léa_Sorciere.jpg";
import Romain from "../../assets/Members/Romain_Druide.png";

function Members() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const members = [
		{
			name: "Aurélie Miroir-de-Lune",
			photo: Aurélie,
			story:
				"Elle est le cerveau du groupe, celle qui croit que la magie doit obéir à la thermodynamique. Armée de ses fiches techniques, elle passe son temps à soupirer quand Léa met le feu à la salle d'attente. Spécialiste des remèdes exacts, elle menace constamment de facturer le temps passé à expliquer aux autres ce qu'est une éprouvette.",
		},
		{
			name: "Juliette Souffle-de-l'Aube",
			photo: Juliette,
			story:
				"L'écologiste spirituelle, refusant toute solution qui n'implique pas de danser ou de parler à un écureuil. Elle diagnostique les problèmes de thyroïde comme étant une « mauvaise circulation des esprits-taupes ». Son tambourin est plus puissant que tous les extincteurs de la boutique, et elle ne le lâchera jamais.",
		},
		{
			name: "Léa FLeur-d'Éther",
			photo: Léa,
			story:
				"La reine de l'impatience et de la surpuissance magique. Léa préfère une explosion rapide et incertaine à une infusion de cinq minutes. Elle utilise les avertissements d'Aurélie comme des suggestions et a une clause de non-responsabilité pour les clients transformés accidentellement en objets de décoration. Elle ne sait pas faire un sort simple.",
		},
		{
			name: "Romain Coeur-de-Silex",
			photo: Romain,
			story:
				"Le moralisateur en chef, grand défenseur du règne végétal et adepte du 'tout est la faute à la viande'. Son remède universel est un jus de lichen amer et il déteste les citadins qui marchent sur ses précieux mousses. Il considère ses chaussettes en poil de yack comme des reliques sacrées.",
		},
	];

	const next = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === members.length - 1 ? 0 : prevIndex + 1,
		);
	};

	const previous = (): void => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? members.length - 1 : prevIndex - 1,
		);
	};

	const slide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="members-container">
			<div className="members-wrap">
				{/* <h2>Notre équipe</h2> */}
				<div className="carousel-card">
					<div className="carousel-content">
						{members.map((member, index) => (
							<div
								key={member.name}
								className={`carousel-slide ${
									index === currentIndex
										? "active"
										: index < currentIndex
											? "prev"
											: "next"
								}`}
							>
								<div className="slide-inner">
									<div className="member-photo">
										<img src={member.photo} alt={member.name} />
									</div>
									<div className="member-info">
										<h3>{member.name}</h3>
										<p>{member.story}</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<button
						type="button"
						onClick={previous}
						className="carousel-arrow carousel-arrow-left"
						aria-label="précédent"
					>
						‹
					</button>
					<button
						type="button"
						onClick={next}
						className="carousel-arrow carousel-arrow-right"
						aria-label="suivant"
					>
						›
					</button>
					<div className="carousel-dots">
						{members.map((member, index) => (
							<button
								type="button"
								key={member.name}
								onClick={() => slide(index)}
								className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
								aria-label={`Aller à la diapo ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Members;
