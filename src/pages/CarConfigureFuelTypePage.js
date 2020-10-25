import React from 'react';
import {Button, Nav, Form, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
class CarConfigureFuelTypePage extends React.Component{

    constructor() {
        super();
        this.state = {
            fuelType: [],
        };
      }
    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/${sessionStorage.brand}/${sessionStorage.model}/${sessionStorage.type}`  
            )
          .then(res => {
             const fuelType = res.data
             console.log(res.data)
             this.setState({
                fuelType: fuelType
           })
         })

    }
    handleClick(fuelType) {
        CarConfigureService.setFuelType(fuelType)
      }
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', width:'20%', backgroundColor: "transparent"}}></Container>
                <div style={{color: "black", fontSize: 20, fontWeight: "bold", textAlign: 'center'}}>Choose a fuel type</div>
                
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <ListGroup>
                            {this.state.fuelType && this.state.fuelType.map((item)=>(
                            <Link to="/configure/engine" style={{color: 'white'}}onClick={this.handleClick.bind(this,item)}>
                                <ListGroup.Item key={item.id} style={{backgroundColor: '#5cb85c', textAlign: 'center', fontSize: '20', paddingLeft: '50px', paddingRight: '50px'}}>{item}</ListGroup.Item>
                            </Link>
                            ))}
                        </ListGroup>
                </Container>
                
            </div>
        );
    }

}
export default CarConfigureFuelTypePage;