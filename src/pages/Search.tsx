import PraticiensCard from "../components/PraticienCard/PraticienCard";
import SearchBar from "../components/SearchBar/SearchBar";
import "./Search.css";
import { useState, useEffect } from "react";
type Item = {
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

function Search() {
	const [res, setRes] = useState<Item[] | undefined>(undefined);
	const [filteredRes, setFilteredRes] = useState<Item[] | undefined>(undefined);
	const [query, setQuery] = useState("");
	useEffect(() => {
		fetch("http://localhost:4242/praticiens")
			.then((res) => res.json())
			.then((data) => {
				setRes(data);
			});
	}, []);

	const submitResponse = () => {
		setFilteredRes(
			res?.filter(
				(item) =>
					item.nom.toLowerCase().includes(query) ||
					item.presentation.toLowerCase().includes(query) ||
					item.specialite.toLowerCase().includes(query),
			),
		);
	};
	const badgeResponse = (badge: string) => {
		setFilteredRes(
			res?.filter((item) => item.categorie.toLowerCase().includes(badge)),
		);
	};
	const dataToDisplay = filteredRes !== undefined ? filteredRes : res;

	return res ? (
		<>
			<div className="search-header">
				<h3>A la recherche d'un spécialiste ?</h3>
				<SearchBar
					query={query}
					setQuery={setQuery}
					submitResponse={submitResponse}
					badgeResponse={badgeResponse}
				/>
				<small>
					<em>Ou découvrez l'enssemble de nos gardiens du savoir ci dessous</em>
				</small>
			</div>
			{dataToDisplay && dataToDisplay.length === 0 ? (
				<p className="search-centered">No results found</p>
			) : (
				dataToDisplay?.map((item) => {
					return <PraticiensCard data={item} key={item.id} />;
				})
			)}
		</>
	) : (
		<p className="search-centered">Loading..</p>
	);
}

export default Search;
