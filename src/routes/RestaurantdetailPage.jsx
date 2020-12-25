import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantApi from '../apis/RestaurantApi';
import { RestaurantContext } from '../Components/context/RestaurantContext';
const RestaurantDetailPage = () => {
	const { id } = useParams();
	const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);
	useEffect(() => {
		const fetchRestaurant = async () => {
			try {
				const {
					data: { restaurant },
				} = await RestaurantApi.get(`/${id}`);
				setSelectedRestaurant(restaurant);
			} catch (err) {
				console.log(err);
			}
		};
		fetchRestaurant();
	}, []);
	if (selectedRestaurant)
		return (
			<div>
				<h1 className='fw-lighter display-1 text-center'>{selectedRestaurant.name}</h1>
				<div>
					<label>Name</label>
					<input placeholder='name' className='form-control' />
				</div>
			</div>
		);
	return <div>Error</div>;
};
export default RestaurantDetailPage;
