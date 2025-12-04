import "./SearchBar.css";
import type { FormEvent } from "react";

// type SearchBarProps = {
//     value: string;
//     onChange: (value: string) => void;
// };

function SearchBar() {
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
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
				// value={value}
				// onChange={(e) => onChange(e.target.value)}
			/>
			<button type="submit" className="search-bar-button">
				Rechercher
			</button>
		</form>
	);
}

export default SearchBar;
