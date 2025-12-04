import BookIntro from "../components/Book-intro/Book-intro";
import Hero from "../components/Hero/Hero";
import ServicesCard from "../components/ServicesCard/ServicesCard";
import "./Home.css";

function Home() {
	return (
		<>
			<BookIntro content />
			<Hero />
			<ServicesCard />
		</>
	);
}

export default Home;
