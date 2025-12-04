import BookIntro from "../components/Book-intro/Book-intro";
import ContactForm from "../components/Contact/ContactForm";
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
			<ContactForm />
		</>
	);
}

export default Home;
