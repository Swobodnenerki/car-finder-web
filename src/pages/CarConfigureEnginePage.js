import React from 'react';
import {Button, Nav, Form, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
class CarConfigureEnginePage extends React.Component{

    constructor() {
        super();
        this.state = {
            engine: [],
        };
      }
    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/${sessionStorage.brand}/${sessionStorage.model}/${sessionStorage.type}/${sessionStorage.fuelType}`  
            )
          .then(res => {
             const engine = res.data
             console.log(res.data)
             this.setState({
                engine: engine
           })
         })

    }
    handleClick(engine) {
        CarConfigureService.setEngine(engine)
      }
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', width:'20%', backgroundColor: "transparent"}}></Container>
                <div style={{color: "black", fontSize: 20, fontWeight: "bold", textAlign: 'center'}}>Choose an engine</div>
                
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <ListGroup>
                            {this.state.engine && this.state.engine.map((item)=>(
                            <Link to="/configure/gearbox" style={{color: 'white'}}onClick={this.handleClick.bind(this,item)}>
                                <ListGroup.Item key={item.id} style={{backgroundColor: '#5cb85c', textAlign: 'center', fontSize: '20', paddingLeft: '50px', paddingRight: '50px'}}>{item}</ListGroup.Item>
                            </Link>
                            ))}
                        </ListGroup>
                </Container>
                
            </div>
        );
    }

}
export default CarConfigureEnginePage;