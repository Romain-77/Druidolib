import { useTranslation } from "react-i18next";
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
	titleKey: string;
	descriptionKey: string;
}

const ContentSectionConcept: ContentSectionProps[] = [
	{
		id: 1,
		imgageUrl: crow,
		titleKey: "home.concept.cards.potion.title",
		descriptionKey: "home.concept.cards.potion.description",
	},
	{
		id: 2,
		imgageUrl: map,
		titleKey: "home.concept.cards.map.title",
		descriptionKey: "home.concept.cards.map.description",
	},
	{
		id: 3,
		imgageUrl: gold,
		titleKey: "home.concept.cards.payment.title",
		descriptionKey: "home.concept.cards.payment.description",
	},
	{
		id: 4,
		imgageUrl: crystal,
		titleKey: "home.concept.cards.prophecy.title",
		descriptionKey: "home.concept.cards.prophecy.description",
	},
	{
		id: 5,
		imgageUrl: emergency,
		titleKey: "home.concept.cards.emergency.title",
		descriptionKey: "home.concept.cards.emergency.description",
	},
	{
		id: 6,
		imgageUrl: chicken,
		titleKey: "home.concept.cards.beasts.title",
		descriptionKey: "home.concept.cards.beasts.description",
	},
];

function ContentSection() {
	const { t } = useTranslation();
	return (
		<section
			className="content-section"
			aria-labelledby="content-section-title"
		>
			<div className="content-section-header">
				<h2 id="content-section-title" className="content-section-title">
					{t("home.concept.title")}
				</h2>
				<p className="content-section-subtitle">{t("home.concept.subtitle")}</p>
			</div>

			<ul className="content-grid">
				{ContentSectionConcept.map((section) => (
					<li key={section.id} className="content-card">
						<div className="content-icon">
							<img src={section.imgageUrl} alt="" />
						</div>
						<h3 className="content-card-title">{t(section.titleKey)}</h3>
						<p className="content-card-description">
							{t(section.descriptionKey)}
						</p>
					</li>
				))}
			</ul>
		</section>
	);
}

export default ContentSection;
