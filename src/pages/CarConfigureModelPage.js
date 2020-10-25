import React from 'react';
import {Button, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
class CarConfigureModelPage extends React.Component{

    constructor() {
        super();
        this.state = {
          brand: "",
        };
      }
    componentDidMount() {
        console.log(sessionStorage.brandS)
        this.setState({
            brand: sessionStorage.brandS
        })
    }
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                <div>{this.state.brand}</div>
            </div>
        );
    }

}
export default CarConfigureModelPage;