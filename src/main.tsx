import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";
import "./typescript/i18n";
import Search from "./pages/Search";

// page components

// router creation

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/search",
				element: <Search />,
			},
			{
				path: "/details/:id",
				element: <Details />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
