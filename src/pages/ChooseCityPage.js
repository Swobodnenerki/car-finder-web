import React from 'react';
import {Button, Nav,Tab, ListGroup, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link, Redirect } from 'react-router-dom';
import CarConfigureList from '../components/CarConfigureList';
import axios from 'axios';
import * as Const from '../static/const';
class ChooseCityPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            values: {
                city:''
            },
            searchSuccessful: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            values: {
                ...this.state.values, [e.target.name]: e.target.value
            }
        });
    }

     handleSubmit() {
        CarConfigureService.setCity(this.state.values.city)
      }

     updateState = (name, value) => {
        this.setState({[name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        CarConfigureService.setCity(this.state.values.city).then(
            this.setState({
            searchSuccessful: true,
        }))

        

    }

    render(){
        if (this.state.searchSuccessful === true) {
            return <Redirect to='/advert/city'/>
        }
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '5%', width:'20%', backgroundColor: "transparent"}}></Container>
                <div style={{color: "black", fontSize: 25, fontWeight: "bold", textAlign: 'center'}}>Search for cars in your area</div>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '5%', width:'20%', backgroundColor: "transparent"}}></Container>
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <Form inline onSubmit={this.handleSubmit}>
                        <Form.Control placeholder="Enter city" className=" mr-sm-2" type="text" name="city" id="city" value={this.state.values.city}
                        onChange={this.handleChange} required/>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Container>
                
            </div>
        );
    }

}
export default ChooseCityPage;