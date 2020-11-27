import React from 'react';
import {Button, Nav, Form, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
class CarConfigureModelPage extends React.Component{

    constructor() {
        super();
        this.state = {
            model: [],
        };
      }
    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure/byBrand/${localStorage.brand}`  
            )
          .then(res => {
             const model = res.data
             console.log(res.data)
             this.setState({
                 model: model
           })
         })

    }
    handleClick(model) {
        CarConfigureService.setModel(model)
      }
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', width:'20%', backgroundColor: "transparent"}}></Container>
                <div style={{color: "black", fontSize: 20, fontWeight: "bold", textAlign: 'center'}}>Choose a model</div>
                
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <ListGroup>
                            {this.state.model && this.state.model.map((item)=>(
                            <Link to="/configure/type" style={{color: 'white'}}onClick={this.handleClick.bind(this,item)}>
                                <ListGroup.Item key={item.id} style={{backgroundColor: '#5cb85c', textAlign: 'center', fontSize: '20', paddingLeft: '50px', paddingRight: '50px'}}>{item}</ListGroup.Item>
                            </Link>
                            ))}
                        </ListGroup>
                </Container>
                
            </div>
        );
    }

}
export default CarConfigureModelPage;