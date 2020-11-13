import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link, Redirect } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader, Grid, Paper} from '@material-ui/core';
import { render } from '@testing-library/react';
import AuthorizationService from '../services/AuthorizationService';
class UserDetailsPage extends React.Component{

    constructor() {
        super();
        this.state = {
            brand: "",
            model: "",
            type: "",
            fuelType: "",
            engine: "",
            gearbox: "",
            trim: "",
            colour: "",
            price: "",
            name: "",
            city: "",
            street: "",
            streetNumber: "",
            url: "",
            phone: "",
            email: "",
            textPhone: "Display number",
            textEmail: "Display email",
            textFollow: "",
            checkInterest: false,
            dealerId: "",
            creator: false,
            logoutSuccessful: false,
        };
      }
      
      handleClick =  (e) => {
        AuthorizationService.logout()
    }

    
    render(){
        return(
            <div>
                <Navbar/>
                <Link to="/"><Button onClick={this.handleClick}>logout</Button></Link>
            </div>
        );
    }

}
export default UserDetailsPage;