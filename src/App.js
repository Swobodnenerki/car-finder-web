import { render } from '@testing-library/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CarConfigureBrandPage from './pages/CarConfigureBrandPage';
import CarConfigureModelPage from './pages/CarConfigureModelPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterDealerPage from './pages/RegisterDealerPage';
import RegisterPage from './pages/RegisterPage';
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
            <Route exect path="/" component={LandingPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
