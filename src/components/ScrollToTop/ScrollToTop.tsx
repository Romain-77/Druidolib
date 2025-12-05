import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop() {
	const { pathname } = useLocation();

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is required to run effect on route change
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [pathname]);
	return null;
}

export default ScrollToTop;
