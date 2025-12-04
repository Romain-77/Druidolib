import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";

// import Home from "./pages/Home";

function App() {
	return (
		<>
			{" "}
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default App;
