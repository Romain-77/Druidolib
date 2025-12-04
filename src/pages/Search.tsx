import { useEffect, useState } from "react";
import PraticiensCard from "../components/PraticienCard/PraticienCard";
import "./Search.css";

type Item = {};

function Search() {
	const [res, setRes] = useState<Item | null>(null);

	useEffect(() => {
		fetch("http://localhost:4242/praticiens")
			.then((res) => res.json())
			.then((data) => {
				setRes(data);
			});
	}, []);

	return (
		<>
			<h1>Search</h1>
			<PraticiensCard />
		</>
	);
}

export default Search;
