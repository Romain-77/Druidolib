import "./SearchBar.css";
import type { FormEvent } from "react";

type SearchBarProps = {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	submitResponse: (query: string) => void;
	badgeResponse: (query: string) => void;
};

function SearchBar({
	query,
	setQuery,
	submitResponse,
	badgeResponse,
}: SearchBarProps) {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(query);
		submitResponse(query);
	};

	return (
		<form className="search-bar" onSubmit={handleSubmit}>
			<label htmlFor="search-input" className="search-bar-label">
				Rechercher:
			</label>
			<input
				type="search"
				id="search-input"
				className="search-bar-input"
				placeholder="Recherchez les praticiens"
				aria-label="Barre de recherche"
				onChange={(e) => {
					setQuery(e.target.value);
				}}
			/>

			<button type="submit" className="search-bar-button">
				Rechercher
			</button>
			<div className="searchBar-badgesContainer">
				<div className="search-badge-wrapper dru">
					<img
						src="http://localhost:4242/assets/images/badgeDruide.png"
						className="search-badge"
						alt="badge recherche Druides"
						onClick={() => {
							badgeResponse("druide");
						}}
						onKeyDown={() => {
							badgeResponse("devin");
						}}
					/>
				</div>
				<div className="search-badge-wrapper voy">
					<img
						src="http://localhost:4242/assets/images/badgeVoyant.png"
						className="search-badge"
						alt="badge recherche Voyants"
						onClick={() => {
							badgeResponse("voyant");
						}}
						onKeyDown={() => {
							badgeResponse("devin");
						}}
					/>
				</div>
				<div className="search-badge-wrapper cha">
					<img
						src="http://localhost:4242/assets/images/badgeChaman.png"
						className="search-badge"
						alt="badge recherche Chamans"
						onClick={() => {
							badgeResponse("chaman");
						}}
						onKeyDown={() => {
							badgeResponse("devin");
						}}
					/>
				</div>
				<div className="search-badge-wrapper dev">
					<img
						src="http://localhost:4242/assets/images/badgeDevin.png"
						className="search-badge"
						alt="badge recherche Devins"
						onClick={() => {
							badgeResponse("devin");
						}}
						onKeyDown={() => {
							badgeResponse("devin");
						}}
					/>
				</div>
				<div className="search-badge-wrapper sor">
					<img
						src="http://localhost:4242/assets/images/badgeSorcière.png"
						className="search-badge"
						alt="badge recherche Sorciers"
						onClick={() => {
							badgeResponse("sorcier");
						}}
						onKeyDown={() => {
							badgeResponse("devin");
						}}
					/>
				</div>
			</div>
		</form>
	);
}

export default SearchBar;
