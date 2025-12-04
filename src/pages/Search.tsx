import { useEffect, useState } from "react";
import PraticiensCard from "../components/PraticienCard/PraticienCard";
import "./Search.css";

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
	const [res, setRes] = useState<Item[] | null>(null);

	useEffect(() => {
		fetch("http://localhost:4242/praticiens")
			.then((res) => res.json())
			.then((data) => {
				setRes(data);
			});
	}, []);

	return res ? (
		res.map((item) => {
			return <PraticiensCard data={item} key={item.id} />;
		})
	) : (
		<p>Loading..</p>
	);
}

export default Search;
