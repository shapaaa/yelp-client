import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import RestaurantApi from '../apis/RestaurantApi';
import { useHistory } from 'react-router-dom';
import { RestaurantContext } from './context/RestaurantContext';

const Container = styled.div`
	margin-top: 40px;
`;
const RestaurantList = () => {
	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	let history = useHistory();
	useEffect(() => {
		const fetchRestaurants = async () => {
			const data = await RestaurantApi.get('/');
			setRestaurants(data.data.restaurants);
		};
		fetchRestaurants();
	}, []);

	const handleDelete = (e, id) => {
		e.stopPropagation();
		RestaurantApi.delete(`/${id}`);
		const arr = restaurants.filter((restaurant) => restaurant.id !== id);
		setRestaurants(arr);
	};
	const handleUpdate = (e, id) => {
		e.stopPropagation();
		history.push(`restaurants/${id}/update`);
	};
	const handleClick = (id) => {
		history.push(`restaurants/${id}`);
	};
	return (
		<Container className='list-group'>
			<table className='table table-hover table-borderless'>
				<thead>
					<tr className='text-light bg-primary'>
						<th scope='col'>Restaurant</th>
						<th scope='col'>Location</th>
						<th scope='col'>Price Range</th>
						<th scope='col'>Ratings</th>
						<th scope='col'>Edit</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody className='table-dark'>
					{restaurants &&
						restaurants.map((restaurant) => (
							<tr onClick={() => handleClick(restaurant.id)} key={restaurant.id}>
								<td scope='row'>{restaurant.name}</td>
								<td>{restaurant.location}</td>
								<td>{'$'.repeat(restaurant.price_range)}</td>
								<td>{restaurant.price_range}</td>
								<td>
									<button
										onClick={(e) => handleUpdate(e, restaurant.id)}
										className='btn btn-warning'>
										Update
									</button>
								</td>
								<td>
									<button
										onClick={(e) => handleDelete(e, restaurant.id)}
										className='btn btn-danger'>
										Delete
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</Container>
	);
};
export default RestaurantList;
