import styled from 'styled-components';
import UpdateRestaurant from '../Components/UpdateRestaurant';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const UpdatePage = () => {
	return (
		<Container>
			<h1 className='font-weight-bold text-center m-4'>Update Restaurant</h1>
			<UpdateRestaurant />
		</Container>
	);
};
export default UpdatePage;
