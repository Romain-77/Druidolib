import { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./Details.css";

type Praticien = {
	id: number;
	nom: string;
	age: string;
	tarif: string;
	specialite: string;
	presentation: string;
	adresse: string;
	imagePraticien: string;
	imageLieu: string;
};

function Details() {
	const [praticien, setPraticien] = useState<Praticien | null>(null);
	const { id } = useParams();

	useEffect(() => {
		if (!id) return;
		fetch(`http://localhost:4242/praticiens/${id}`)
			.then((res) => res.json())
			.then((data) => {
				console.log("Données reçues :", data);
				setPraticien(data);
			})
			.catch((err) => console.error(err));
	}, [id]);

	return (
		<div className="praticien-detail-page">
			<div className="praticien-detail-mainPresentation">
				<div className="praticien-detail-portrait">
					<img
						className="praticien-detail-img"
						src={praticien?.imagePraticien}
						alt={praticien?.nom}
					/>
				</div>
				<section className="praticien-detail-section-title">
					<h1 className="praticien-detail-title">{praticien?.nom}</h1>
					<ul className="praticien-detail-liste">
						<li>
							<strong>Qui est-il ? : </strong>
							{praticien?.presentation}
						</li>
						<li>
							<strong>Sa spécialité : </strong>
							{praticien?.specialite}
						</li>
						<li>
							<strong>Son âge : </strong>
							{praticien?.age}
						</li>
						<li>
							<strong>Tarif : </strong>
							{praticien?.tarif}
						</li>
					</ul>
				</section>
			</div>
			<div className="praticien-detail-secondPresentation">
				<div className="praticien-detail-lieu">
					<h2 className="praticien-detail-title2">Retrouvez-moi :</h2>
					<p>{praticien?.adresse}</p>
				</div>
				<figure>
					<img
						className="praticien-detail-imgLieu"
						src={praticien?.imageLieu}
						alt={praticien?.adresse}
					/>
				</figure>
			</div>
		</div>
	);
}

export default Details;
