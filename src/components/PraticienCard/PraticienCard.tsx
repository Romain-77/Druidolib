import { Link } from "react-router";
import "./PraticiensCard.css";

function PraticiensCard() {
	return (
		<div className="praticien-card-container">
			<div className="praticien-card-portrait">
				<img
					src="https://i.pinimg.com/736x/55/c8/5d/55c85df5a782f787b19b0b348c467bda.jpg"
					alt="test"
				/>
			</div>
			<div className="praticien-card-text">
				<h4>Mentali</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicisit! Blabliblou o
					gamnamstyle
				</p>
			</div>
			<Link to="/" className="button praticien-card-btn">
				Decouvrir ce praticien
			</Link>
		</div>
	);
}
export default PraticiensCard;
