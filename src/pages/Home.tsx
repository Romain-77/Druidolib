import ContactForm from "../components/Contact/ContactForm";
import ContentSection from "../components/ContentSection/ContentSection";
import Hero from "../components/Hero/Hero";
import "./Home.css";

function Home() {
	return (
		<>
			<Hero />
			<ContentSection />
			<ContactForm />
		</>
	);
}

export default Home;
