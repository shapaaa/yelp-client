const { default: StarRating } = require('./StarRating');

const Reviews = ({ reviews }) => {
	return (
		<div className='row row-cols-3 mb-4'>
			{reviews.map((review) => (
				<div
					key={review.id}
					className='card text-white bg-primary mb-4 me-4'
					style={{ maxWidth: '30%' }}>
					<div className='ps-3 pt-2 d-flex justify-content-between'>
						<span>{review.name}</span>
						<span>
							<StarRating rating={review.rating} />
						</span>
					</div>
					<div className='card-body'>
						<p className='card-text'>{review.review}</p>
					</div>
				</div>
			))}
		</div>
	);
};
export default Reviews;
