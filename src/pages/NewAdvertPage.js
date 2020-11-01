import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader, Grid, Paper} from '@material-ui/core';
import { render } from '@testing-library/react';
class NewAdvertPage extends React.Component{

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
            creator: false
        };
      }


    componentDidMount() {
        


    }

    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
            </div>
        );
    }

}
export default NewAdvertPage;