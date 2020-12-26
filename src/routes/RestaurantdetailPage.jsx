import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantApi from '../apis/RestaurantApi';
import AddReview from '../Components/AddReview';
import { RestaurantContext } from '../Components/context/RestaurantContext';
import Reviews from '../Components/Reviews';
import StarRating from '../Components/StarRating';

const RestaurantDetailPage = () => {
	const { id } = useParams();
	const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);
	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const {
					data: { data },
				} = await RestaurantApi.get(`/${id}`);
				setSelectedRestaurant(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchRestaurant();
	}, []);
	return (
		<div>
			{selectedRestaurant && (
				<>
					<h1 className='fw-lighter display-1 mb-4 text-center'>
						{selectedRestaurant.restaurant.name}
					</h1>
					<div className='text-center'>
						<StarRating rating={selectedRestaurant.restaurant.average_rating} />
						<span className='text-warning'>
							{selectedRestaurant.restaurant.count
								? `(${selectedRestaurant.restaurant.count})`
								: '(0)'}
						</span>
					</div>
					<Reviews reviews={selectedRestaurant.reviews} />
					<AddReview />
				</>
			)}
		</div>
	);
};
export default RestaurantDetailPage;
