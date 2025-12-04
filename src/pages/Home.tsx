import BookIntro from "../components/Book-intro/Book-intro";
import ContactForm from "../components/Contact/ContactForm";
import ContentSection from "../components/ContentSection/ContentSection";
import Hero from "../components/Hero/Hero";
import "./Home.css";

function Home() {
	return (
		<>
			<BookIntro content />
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
