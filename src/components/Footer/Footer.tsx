import Bouc from "../../assets/Footer-Socials/icons8-chèvre-100.png";
import Pigeon from "../../assets/Footer-Socials/icons8-pigeon-64.png";
import Christal from "../../assets/Footer-Socials/icons8-boule-de-cristal-magique-100.png";
import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-content">
				<div className="footer-columns">
					<div className="footer-section">
						<h4>Druidolib</h4>
						<p>
							Depuis la nuit des temps nous relions les mystiques aux mortels
						</p>
						<p>Aucun crapaud n'a été maltraité dans la création de ce site</p>
					</div>
				</div>
				<div className="footer-social">
					<div className="social-links">
						<a href="/FB" aria-label="FaceDeBouc">
							<img src={Bouc} alt="FaceDeBouc" />
							<p>FaceDeBouc</p>
						</a>
						<a href="/X" aria-label="Pigeon">
							<img src={Pigeon} alt="Pigeon" />
							<p>PigeOn</p>
						</a>
						<a href="/Insta" aria-label="LegenDram">
							<img src={Christal} alt="LegenDram" />
							<p>LegenDram</p>
						</a>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="footer-copyright">
						<p>© An de grâce 578</p>
						<div className="footer-blessing">
							<p>
								Site béni par le Conseil des Anciens - Sortileges certifiés Bio
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;
