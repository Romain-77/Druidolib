import BookIntro from "../components/Book-intro/Book-intro";
import ContactForm from "../components/Contact/ContactForm";
import ContentSection from "../components/ContentSection/ContentSection";
import Hero from "../components/Hero/Hero";
import "./Home.css";

function Home() {
	return (
		<>
			<BookIntro content />
			<section className="home-hero">
				<Hero />
				<ContentSection />
			</section>
			<ContactForm />
		</>
	);
}

export default Home;
