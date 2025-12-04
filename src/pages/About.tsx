import "./About.css";
import FAQ from "../components/FAQ/FAQ";
import Members from "../components/Members/Members";
import Testimonials from "../components/Testimonials/Testimonials";

function About() {
	return (
		<>
			<h1>About</h1>
			<Members />
			<FAQ />
			<Testimonials />
		</>
	);
}

export default About;
