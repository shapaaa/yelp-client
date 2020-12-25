import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import RestaurantApi from '../apis/RestaurantApi';

const UpdateRestaurant = () => {
	const { id } = useParams();
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState(0);
	let history = useHistory();
	// ** here we are not using context or props to get the restaurant
	// ** because when user directly goes this url it will not fetch the restaurants
	// ** which we fetch in home page so using useEffect
	useEffect(() => {
		const fetchRestaurant = async () => {
			const { data } = await RestaurantApi.get(`/${id}`);
			const { name, location, price_range } = data.restaurant;
			setName(name);
			setLocation(location);
			setPriceRange(price_range);
		};
		fetchRestaurant();
	}, []);
	const handleClick = async (e) => {
		e.preventDefault();
		const response = await RestaurantApi.put(`/${id}`, {
			name,
			location,
			price_range: priceRange,
		});
		history.push('/');
	};
	return (
		<>
			<form>
				<div className='form-group'>
					<label className='form-label'>Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						className='mb-2 form-control'
					/>
				</div>
				<div className='form-group'>
					<label className='form-label'>Location</label>
					<input
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						type='text'
						className='mb-2 form-control'
					/>
				</div>
				<div className='form-group'>
					<label for='price_range' className='form-label'>
						Price Range
					</label>
					<input
						value={priceRange}
						onChange={(e) => setPriceRange(e.target.value)}
						type='number'
						id='price_range'
						min='1'
						max='5'
						className='mb-2  form-control'
					/>
				</div>
				<button onClick={handleClick} type='button' className='mt-2 btn btn-primary'>
					Submit
				</button>
			</form>
		</>
	);
};
export default UpdateRestaurant;
