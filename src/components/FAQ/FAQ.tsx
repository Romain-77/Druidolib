import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

function FAQ() {
	const { t } = useTranslation();
	const [activeId, setActiveId] = useState<number | null>(null);

	const questions = [
		{
			id: 1,
			question: t("about.faq.items.q1.question"),
			reponse: t("about.faq.items.q1.answer"),
		},
		{
			id: 2,
			question: t("about.faq.items.q2.question"),
			reponse: t("about.faq.items.q2.answer"),
		},
		{
			id: 3,
			question: t("about.faq.items.q3.question"),
			reponse: t("about.faq.items.q3.answer"),
		},
		{
			id: 4,
			question: t("about.faq.items.q4.question"),
			reponse: t("about.faq.items.q4.answer"),
		},
		{
			id: 5,
			question: t("about.faq.items.q5.question"),
			reponse: t("about.faq.items.q5.answer"),
		},
	];

	const toggleQuestion = (id: number) => {
		setActiveId(activeId === id ? null : id);
	};

	return (
		<section className="faq-section">
			<h3>{t("about.faq.title")}</h3>

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
