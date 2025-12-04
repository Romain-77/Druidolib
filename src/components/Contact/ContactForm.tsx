import type { FormEvent } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import megaphone from "../../assets/contact/megaphone.svg";
import pigeon from "../../assets/contact/pigeon.svg";
import tree from "../../assets/contact/tree.svg";
import "./ContactForm.css";

interface FormData {
	nom: string;
	prenom: string;
	email: string;
	sujet: string;
	message: string;
	consent: boolean;
	website: string; // pour pieger les bot
}

const initData: FormData = {
	nom: "",
	prenom: "",
	email: "",
	sujet: "",
	message: "",
	consent: false,
	website: "",
};

export default function ContactForm() {
	const { t } = useTranslation();
	const [values, setValues] = useState<FormData>(initData); //champ du formulaire
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>(
		// status ou il manque des elements
		"idle",
	);
	const [serverMsg, setServerMsg] = useState(""); //text visible pour utilisateur
	const [isModalOpen, setIsModalOpen] = useState(false);

	// MAJ des champs
	const onChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, type } = e.target;
		const value =
			type === "checkbox"
				? (e.target as HTMLInputElement).checked
				: e.target.value;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	//modale
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Submission du formulaire

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// on ignore le bot s'il remplit le champ website
		if (values.website) return;

		const form = e.currentTarget;

		// validation native du navigateur
		if (!form.checkValidity()) {
			form.reportValidity();
			return;
		}

		try {
			setStatus("sending");
			setServerMsg("");
			// API si besoin pour version connectee.
			await new Promise((r) => setTimeout(r, 800));

			setStatus("success");
			setServerMsg("Merci ! Votre pigeon est bien parti.");
			setValues(initData);
			form.reset(); //remise du state
			setIsModalOpen(true);
		} catch {
			setStatus("error");
			setServerMsg("Votre pigeon s'est perdu, veuillez en envoyer un autre.");
			setIsModalOpen(true);
		}
	};

	return (
		<section className="form-section" aria-labelledby="contact-title">
			<div className="contact-layout">
				<div className="contact-form-wrapper">
					<form
						className="form-contact"
						onSubmit={onSubmit}
						noValidate
						aria-describedby="contact-instructions"
					>
						<p id="contact-instructions" className="sr-only">
							Tous les champs marqués d&apos;un astérix a besoin d'un Obelix.
						</p>

						{/* Honeypot */}
						<input
							type="text"
							name="website"
							value={values.website}
							onChange={onChange}
							className="hp-field"
							tabIndex={-1}
							autoComplete="off"
							aria-hidden="true"
						/>

						<fieldset>
							<legend>Votre identité</legend>

							<div className="form-row">
								<div className="form-field">
									<label htmlFor="nom">
										Nom de votre lignée <span aria-hidden="true">*</span>
									</label>
									<input
										id="nom"
										name="nom"
										type="text"
										required
										placeholder="de Belmir, de la Brume, du Val..."
										value={values.nom}
										onChange={onChange}
										autoComplete="family-name"
									/>
								</div>

								<div className="form-field">
									<label htmlFor="prenom">
										Prénom <span aria-hidden="true">*</span>
									</label>
									<input
										id="prenom"
										name="prenom"
										type="text"
										required
										placeholder="Votre prénom"
										value={values.prenom}
										onChange={onChange}
										autoComplete="given-name"
									/>
								</div>
							</div>

							<div className="form-field">
								<label htmlFor="email">
									Adresse de corbeau <span aria-hidden="true">*</span>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									placeholder="votre corbeau"
									value={values.email}
									onChange={onChange}
									inputMode="email"
									autoComplete="email"
								/>
							</div>
						</fieldset>

						<fieldset>
							<legend>Votre message</legend>

							<div className="form-field">
								<label htmlFor="sujet">
									Sujet de votre requête <span aria-hidden="true">*</span>
								</label>
								<input
									id="sujet"
									name="sujet"
									type="text"
									required
									placeholder="Mal étrange, potion, prophétie..."
									value={values.sujet}
									onChange={onChange}
								/>
							</div>

							<div className="form-field">
								<label htmlFor="message">
									Contenu de la missive <span aria-hidden="true">*</span>
								</label>
								<textarea
									id="message"
									name="message"
									rows={6}
									required
									minLength={10}
									placeholder="Décrivez votre mal, vos visions ou toute requête destinée au cercle..."
									value={values.message}
									onChange={onChange}
								/>
							</div>

							<div className="form-consent">
								<input
									id="consent"
									name="consent"
									type="checkbox"
									required
									checked={values.consent}
									onChange={onChange}
								/>
								<label htmlFor="consent">
									J'accepte que mon message soit consigné dans les grimoires de
									Druidolib afin qu'un membre du cercle puisse me répondre.
								</label>
							</div>
						</fieldset>
						<div className="form-actions">
							<button type="submit" disabled={status === "sending"}>
								{status === "sending"
									? "Envoi du corbeau..."
									: "Envoyer la missive"}
							</button>
							<button
								type="reset"
								className="button-secondary"
								onClick={() => {
									setValues(initData);
									setStatus("idle");
									setServerMsg("");
								}}
							>
								Effacer le parchemin
							</button>
						</div>
					</form>
				</div>
				<aside className="contact-info" aria-labelledby="contact-title">
					<p className="contact-info-kicker">{t("home.contact.kicker")}</p>
					<h2 id="contact-title">{t("home.contact.title")}</h2>
					<p>{t("home.contact.intro")}</p>

					<ul className="contact-info-list">
						<li>
							<img src={pigeon} className="contact-icon" alt="" />
							<span>{t("home.contact.bullets.pigeon")}</span>
						</li>
						<li>
							<img src={megaphone} className="contact-icon" alt="" />
							<span>{t("home.contact.bullets.shout")}</span>
						</li>
						<li>
							<img src={tree} className="contact-icon" alt="" />
							<span>{t("home.contact.bullets.forest")}</span>
						</li>
					</ul>
				</aside>
			</div>
			{/* MODALE */}
			{isModalOpen && (
				<dialog
					className="form-modal-backdrop"
					aria-modal="true"
					aria-labelledby="form-modal-title"
					open
				>
					<div className="form-modal">
						<h3 id="form-modal-title">
							{status === "success"
								? "Le corbeau est bien arrivé !"
								: "Le pigeon a rencontré des turbulences"}
						</h3>
						<p>{serverMsg}</p>
						<button type="button" onClick={closeModal}>
							Refermer le parchemin
						</button>
					</div>
				</dialog>
			)}
		</section>
	);
}
