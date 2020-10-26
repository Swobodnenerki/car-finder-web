import { render } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CarConfigureBrandPage from './pages/CarConfigureBrandPage';
import CarConfigureEnginePage from './pages/CarConfigureEnginePage';
import CarConfigureFuelTypePage from './pages/CarConfigureFuelTypePage';
import CarConfigureGearboxPage from './pages/CarConfigureGearbox';
import CarConfigureModelPage from './pages/CarConfigureModelPage';
import CarConfigureTypePage from './pages/CarConfigureTypePage';
import CarConfigureTrimPage from './pages/CarConfigureTrimPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterDealerPage from './pages/RegisterDealerPage';
import RegisterPage from './pages/RegisterPage';
import CarConfigureColourPage from './pages/CarConfigureColourPage';
import AdvertPage from './pages/AdvertPage';
import AdvertDetailsPage from './pages/AdvertDetailsPage';
class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <Switch>
            <Route exect path="/login" component={LoginPage}/>
            <Route exect path="/registeruser" component={RegisterPage}/>
            <Route exect path="/registerdealer" component={RegisterDealerPage}/>
            <Route exect path="/homepage" component={HomePage}/>
            <Route exact path="/configure/brand" component={CarConfigureBrandPage}/>
            <Route exact path="/configure/model" component={CarConfigureModelPage}/>
            <Route exact path="/configure/type" component={CarConfigureTypePage}/>
            <Route exact path="/configure/fueltype" component={CarConfigureFuelTypePage}/>
            <Route exact path="/configure/engine" component={CarConfigureEnginePage}/>
            <Route exact path="/configure/gearbox" component={CarConfigureGearboxPage}/>
            <Route exact path="/configure/trim" component={CarConfigureTrimPage}/>
            <Route exact path="/configure/colour" component={CarConfigureColourPage}/>
            <Route exact path="/configure/adverts" component={AdvertPage}/>
            <Route exact path="/advert/details" component={AdvertDetailsPage}/>
            <Route exect path="/" component={LandingPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
