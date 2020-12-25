import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantdetailPage';
import UpdatePage from './routes/UpdatePage';
import { RestaurantContextProvider } from './Components/context/RestaurantContext';

function App() {
	return (
		<RestaurantContextProvider>
			<div className='container'>
				<Router>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/restaurants/:id'>
							<RestaurantDetailPage />
						</Route>
						<Route exact path='/restaurants/:id/update'>
							<UpdatePage />
						</Route>
					</Switch>
				</Router>
			</div>
		</RestaurantContextProvider>
	);
}

export default App;
