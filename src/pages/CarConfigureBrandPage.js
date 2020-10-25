import React from 'react';
import {Button, Nav,Tab, ListGroup, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import CarConfigureList from '../components/CarConfigureList';
import axios from 'axios';
import * as Const from '../static/const';
class CarConfigureBrandPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            
            carSpecs: [],
        };
    }

    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure`  
            )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                 carSpecs: carSpecs
           })
         })
         
     }
     handleClick(brand) {
        CarConfigureService.setBrand(brand)
      }

     updateState = (name, value) => {
        this.setState({[name]: value})
    }

    render(){
        
        return(
            // <div>
            //     <Navbar/>
            //     <Form onSubmit={this.handleSubmit}>
            //         <Form.Group controlId="formBasicBrand">
            //             <Form.Label>brand</Form.Label>
            //             <Form.Control placeholder="Enter brand" type="text" placeholder="Brand" type="text" name="brand" id="brand" value={this.state.values.brand}
            //             onChange={this.handleChange} required/>
            //         </Form.Group> 
            //         <Button variant="success" type="submit" style={{fontSize: 20, fontWeight: "bold", paddingRight: 80, paddingLeft: 80}}>dupa in</Button>
            //     </Form>
            //     <Link to="/configure/model"><Button style={{fontSize:30, paddingLeft:50, paddingRight: 50,fontWeight: "bold" }} variant="success">Select a model</Button></Link>
            // </div>
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', width:'20%', backgroundColor: "transparent"}}></Container>
                <div style={{color: "black", fontSize: 20, fontWeight: "bold", textAlign: 'center'}}>Choose a brand</div>
                
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <ListGroup>
                            {this.state.carSpecs && this.state.carSpecs.map((item)=>(
                            <Link to="/configure/model" style={{color: 'white'}}onClick={this.handleClick.bind(this,item)}>
                                <ListGroup.Item key={item.id} style={{backgroundColor: '#5cb85c', textAlign: 'center', fontSize: '20', paddingLeft: '50px', paddingRight: '50px'}}>{item}</ListGroup.Item>
                            </Link>
                            ))}
                        </ListGroup>
                </Container>
                
            </div>
        );
    }

}
export default CarConfigureBrandPage;