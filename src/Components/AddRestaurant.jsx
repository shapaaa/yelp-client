import { useContext, useState } from 'react';
import styled from 'styled-components';
import RestaurantApi from '../apis/RestaurantApi';
import { RestaurantContext } from './context/RestaurantContext';
const Container = styled.form`
	display: flex;
	margin-top: 30px;
`;
const Home = () => {
	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState(0);
	const handleClick = async (e) => {
		e.preventDefault();
		try {
			const response = await RestaurantApi.post('/', {
				name,
				location,
				price_range: priceRange,
			});
			setRestaurants([...restaurants, response.data.restaurants]);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<Container>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='form-control rounded-1 p-2 mx-4'
				placeholder='name'
			/>
			<input
				value={location}
				onChange={(e) => setLocation(e.target.value)}
				className='rounded-1 form-control me-4'
				placeholder='Location'
			/>
			<select
				value={priceRange}
				onChange={(e) => setPriceRange(e.target.value)}
				className='form-control pe-4 me-2 custom-select'
				placeholder='Price Range'>
				<option disabled>price range</option>
				<option value='1'>$</option>
				<option value='2'>$$</option>
				<option value='3'>$$$</option>
				<option value='4'>$$$$</option>
				<option value='5'>$$$$$</option>
			</select>
			<button type='submit' onClick={handleClick} className='px-4 me-2 btn btn-primary'>
				Add
			</button>
		</Container>
	);
};
export default Home;
