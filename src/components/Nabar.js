import React from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersonCircle} from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import axios from 'axios'
import * as Const from '../static/const';
class NavbarHome extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isDealer: 0,
        };
    }

    componentDidMount() {
        axios.get(`${Const.API_URL}api/dealerByAccountId/${sessionStorage.loggedID}`  
            )
          .then(res => {
             const status = res.data
             console.log(res.data)
             this.setState({
               isDealer: status
           })
         })
     }

    updateState = (name, value) => {
        this.setState({[name]: value})
    }
    render(){
        console.log(sessionStorage.loggedID)
        if(this.state.isDealer == 0){
        return(
                <Navbar bg="primary" variant="dark" style={{height: '9%'}}>
                    <Navbar.Brand href="/homepage" style={{color: "white", fontWeight: "bold", fontSize: "36"}}>CarFinder</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" style={{color: "white", fontWeight: "bold", fontSize: "18"}}>Favorite</Nav.Link>
                        <Nav.Link href="#link" style={{color: "white", fontWeight: "bold", fontSize: "18"}}>Select a car</Nav.Link>
                    </Nav>
                    <Link to="#account"><PersonCircle color="white" size={40} /></Link>
                </Navbar>
        );    
        }
        return(
                <Navbar bg="primary" variant="dark" style={{height: '9%'}}>
                    <Navbar.Brand href="/homepage" style={{color: "white", fontWeight: "bold", fontSize: "36"}}>CarFinder</Navbar.Brand>
                    <Nav className="mr-auto" >
                        <Nav.Link href="#home" style={{color: "white", fontWeight: "bold", fontSize: "18"}}>Favorite</Nav.Link>
                        <Nav.Link href="#link" style={{color: "white", fontWeight: "bold", fontSize: "18"}}>Select a car</Nav.Link>
                        <Nav.Link href="#link2" style={{color: "white", fontWeight: "bold", fontSize: "18"}}>Add new a car</Nav.Link>
                    </Nav>
                    <Link to="#account"><PersonCircle color="white" size={40} /></Link>
                </Navbar>
                
        );
    }

}
export default NavbarHome;