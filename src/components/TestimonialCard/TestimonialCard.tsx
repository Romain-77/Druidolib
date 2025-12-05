interface TestimonialCardProps {
	commentaire: string;
	auteur: string;
	rating: number;
	image: string;
}

const renderStars = (rating: number): string => {
	const fullStar = "★";
	const emptyStar = "☆";
	const clampRating = Math.max(0, Math.min(5, rating));
	return fullStar.repeat(clampRating) + emptyStar.repeat(5 - clampRating);
};

const TestimonialCard = ({
	commentaire,
	auteur,
	rating,
	image,
}: TestimonialCardProps) => {
	return (
		<div className="testimonial-card">
			<div className="rating" title={`Évaluation de ${rating} étoiles sur 5`}>
				{renderStars(rating)}
			</div>
			<blockquote className="commentaire">{commentaire}</blockquote>
			<div className="client-info">
				<img src={image} alt={auteur} className="client-photo" />
				<p>{auteur}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
