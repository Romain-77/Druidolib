// import { useEffect, useState } from "react";
// import "./Book-intro.css";

// function BookIntro({ content }: { content: React.ReactNode }) {
// 	const [showIntro, setShowIntro] = useState(true);

// 	useEffect(() => {
// 		const cover = document.querySelector(".grimoire-cover");
// 		if (!cover) return;
// 		cover.addEventListener("animationend", () => {
// 			setTimeout(() => setShowIntro(false), 350);
// 		});
// 	}, []);

// 	return (
// 		<>
// 			{showIntro && (
// 				<div className="intro-screen">
// 					<div className="grimoire">
// 						<div className="grimoire-pages">
// 							<h2>DRUIDOLIB</h2>
// 						</div>
// 						<div className="grimoire-cover"></div>
// 					</div>
// 				</div>
// 			)}
// 			<div className={showIntro ? "hidden-content" : "visible-content"}>
// 				{content}
// 			</div>
// 		</>
// 	);
// }

// export default BookIntro;
