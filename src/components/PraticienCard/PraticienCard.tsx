import { Link } from "react-router";
import "./PraticiensCard.css";
type PraticiensCardProps = {
	data: {
		id: number;
		categorie: string;
		badge: string;
		nom: string;
		age: string;
		specialite: string;
		presentation: string;
		tarif: string;
		adresse: string;
		imagePraticien: string;
		imageLieu: string;
	};
};
function PraticiensCard({ data }: PraticiensCardProps) {
	return (
		<div className="praticien-card-container">
			<div className="praticien-card-portrait">
				<img src={data.imagePraticien} alt={data.nom} />
			</div>
			<div className="praticien-card-text">
				<h4>{data.nom}</h4>
				<p>{data.specialite}</p>
			</div>
			<Link to={`/details/${data.id}`} className="button praticien-card-btn">
				Decouvrir
			</Link>
			<img
				src={data.badge}
				alt="badge specialite"
				className="praticien-card-badge"
				title={data.categorie}
			/>
		</div>
	);
}
export default PraticiensCard;
