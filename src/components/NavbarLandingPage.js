import React from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageStyle from '../styles/LandingPageStyle.css';
import {PersonCircle} from "react-bootstrap-icons"
import { Link } from "react-router-dom";
class NavbarLandingPage extends React.Component{
    render(){
        return(
                <Navbar bg="primary" variant="dark" style={{height: '9%'}}>
                    <Navbar.Brand href="/" style={{color: "white", fontWeight: "bold", fontSize: "36"}}>CarFinder</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Nav.Link href="/registerdealer"style={{color: "white", fontWeight: "bold", fontSize: "18"}}>Join our team!</Nav.Link>
                    <Nav.Link><Link to="/login"><PersonCircle color="white" size={40} /></Link></Nav.Link>
                </Navbar>
                
        );
    }

}
export default NavbarLandingPage;