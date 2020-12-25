import styled from 'styled-components';
import Header from '../Components/Header';
import AddRestaurant from '../Components/AddRestaurant'
import RestaurantList from '../Components/RestaurantList';

const Container = styled.div`

`;

const Home = () =>{
    return (
     <Container>
         <Header/>
         <AddRestaurant/>
         <RestaurantList/>
     </Container>
    );
}
export default Home;