import React from 'react';
import {Button, Nav, Form, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
class CarConfigureColourPage extends React.Component{

    constructor() {
        super();
        this.state = {
            colour: [],
        };
      }
    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/byEngine/byGearbox/byTrim/${localStorage.brand}/${localStorage.model}/${localStorage.type}/${localStorage.fuelType}/${localStorage.engine}/${localStorage.gearbox}/${localStorage.trim}`  
            )
          .then(res => {
             const colour = res.data
             console.log(res.data)
             this.setState({
                colour: colour
           })
         })

    }
    handleClick(colour) {
        CarConfigureService.setColour(colour)
      }
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', width:'20%', backgroundColor: "transparent"}}></Container>
                <div style={{color: "black", fontSize: 20, fontWeight: "bold", textAlign: 'center'}}>Choose a colour</div>
                
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <ListGroup>
                            {this.state.colour && this.state.colour.map((item)=>(
                            <Link to="/configure/adverts" style={{color: 'white'}}onClick={this.handleClick.bind(this,item)}>
                                <ListGroup.Item key={item.id} style={{backgroundColor: '#5cb85c', textAlign: 'center', fontSize: '20', paddingLeft: '50px', paddingRight: '50px'}}>{item}</ListGroup.Item>
                            </Link>
                            ))}
                        </ListGroup>
                </Container>
                
            </div>
        );
    }

}
export default CarConfigureColourPage;