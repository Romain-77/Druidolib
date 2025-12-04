import "./SearchBar.css";
import type { FormEvent } from "react";

type SearchBarProps = {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	submitResponse: (query: String) => void;
};

function SearchBar({ query, setQuery, submitResponse }: SearchBarProps) {
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
		</form>
	);
}

export default SearchBar;
