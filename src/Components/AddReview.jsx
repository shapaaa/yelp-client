import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantApi from '../apis/RestaurantApi';

const AddReview = () => {
	const { id } = useParams();
	const [name, setName] = useState('');
	const [rating, setRating] = useState(1);
	const [review, setReview] = useState('');
	const handleClick = async (e) => {
		e.preventDefault();
		const result = { name, rating, review };
		try {
			const response = await RestaurantApi.post(`/${id}/addReview`, result);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<form className='mb-4'>
			<div className='row mb-3'>
				<div className='form-group col-8'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder='name'
						id='name'
						type='text'
						className='form-control'
					/>
				</div>
				<div className='form-group col-4'>
					<label className='form-label' htmlFor='rating'>
						Rating
					</label>
					<select onChange={(e) => setRating(e.target.value)} className='form-select'>
						<option disabled>Rating</option>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5 </option>
					</select>
				</div>
			</div>
			<div className='form-group mb-3'>
				<label className='form-label' htmlFor='Review'>
					Review
				</label>
				<textarea
					value={review}
					onChange={(e) => setReview(e.target.value)}
					className='form-control'
					rows='4'
					id='Review'></textarea>
			</div>
			<button onClick={handleClick} className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
};
export default AddReview;
