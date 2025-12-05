import ContactForm from "../components/Contact/ContactForm";
import ContentSection from "../components/ContentSection/ContentSection";
import Hero from "../components/Hero/Hero";
import "./Home.css";

function Home() {
	return (
		<>
			<Hero />
			<button type="button" className="button-secondary">
				Click Me
			</button>
			<button type="button" className="button">
				Click Me
			</button>
			<ContentSection />
			<ContactForm />
		</>
	);
}

export default Home;
