import "./ContentSection.css";
import chicken from "../../assets/contentSection/chicken.svg";
import crow from "../../assets/contentSection/crow.svg";
import crystal from "../../assets/contentSection/crystal.svg";
import emergency from "../../assets/contentSection/emergency.svg";
import gold from "../../assets/contentSection/gold.svg";
import map from "../../assets/contentSection/map.svg";

interface ContentSectionProps {
	id: number;
	imgageUrl: string;
	title: string;
	description: string;
}

const ContentSectionConcept: ContentSectionProps[] = [
	{
		id: 1,
		imgageUrl: crow,
		title: "Potion Prête-à-Livrer",
		description:
			"Avec Druidolib, recevez une potion en un éclair (ou deux si le corbeau/pigeon est fatigué). Idéal pour soigner une toux maléfique !",
	},
	{
		id: 2,
		imgageUrl: map,
		title: "Carte interactive des praticiens",
		description:
			"Trouvez en un clin d'œil le Druide, la Sorcière ou le Devin le plus proche. Attention : certaines clairières bougent légèrement selon l'humeur des esprits.",
	},
	{
		id: 3,
		imgageUrl: gold,
		title: "Paiement en troc ou en or",
		description:
			"Nos praticiens ont une large préférence pour une chèvre laitière tant qu'elle n'est pas maudite ou invisible. L'or et les pierres précieuses sont également acceptés.",
	},
	{
		id: 4,
		imgageUrl: crystal,
		title: "Consulation de Prophéties",
		description:
			"Besoin d'un aperçu de votre avenir ? Avec Druidolib, obtenez une prophétie fiable à 73,6% (les 26,4% restants dépendent de l'alignement des astres, de la position des runes et si vous apportez des cookies au devin).",
	},
	{
		id: 5,
		imgageUrl: emergency,
		title: "Urgences Magiques 24/7",
		description:
			"Victime du sortilèges ? Potion expirée ? Enchantement douteux ? Nos praticiens sont disponibles jour et nuit pour vous aider à rétablir l'équilibre magique (sauf la pleine lune, ils sont un peu occupés).",
	},
	{
		id: 6,
		imgageUrl: chicken,
		title: "Suivi médical de vos bêtes",
		description:
			"Un ochon mélancolique, un poulet aphone, une mûle qui n'en fait qu'à sa tête. Nos experts savent gérer tous les cas, même les plus enchantés (s'ils existent).",
	},
];

function ContentSection() {
	return (
		<section
			className="content-section"
			aria-labelledby="content-section-title"
		>
			<div className="content-section-header">
				<h2 id="content-section-title" className="content-section-title">
					Concept du Druidolib
				</h2>
				<p className="content-section-subtitle">
					Découvrez les fonctionnalités principales de notre annuaire
				</p>
			</div>

			<ul className="content-grid">
				{ContentSectionConcept.map((section) => (
					<li key={section.id} className="content-card">
						<div className="content-icon">
							<img src={section.imgageUrl} alt="" />
						</div>
						<h3 className="content-card-title">{section.title}</h3>
						<p className="content-card-description">{section.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
}

export default ContentSection;
