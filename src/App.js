import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import styled from 'styled-components'
import Home from './routes/Home';
import RestaurantDetailPage from './routes/RestaurantdetailPage';
import UpdatePage from './routes/UpdatePage';

function App() {
  return (
    <Router>
      <Switch>
       <Route exact path='/'>
          <Home/>
       </Route>
       <Route exact path='/restaurants/:id'>
          <RestaurantDetailPage/>
       </Route>
       <Route path='/restaurants/:id/update'>
          <UpdatePage/>
       </Route>
      </Switch>
    </Router>
  );
}

export default App;
