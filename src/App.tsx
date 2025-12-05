import "./App.css";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// import Home from "./pages/Home";

function App() {
	return (
		<>
			<ScrollToTop />
			{" "}
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
