import React from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {PersonCircle} from "react-bootstrap-icons";
import NavbarLandingPage from "../components/NavbarLandingPage";
import LoginBox from "../components/LoginBox";
class LoginPage extends React.Component{
    render(){
        return(
            <div>
                <NavbarLandingPage/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '15%', width:'20%', backgroundColor: "transparent"}}></Container>
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center",height: '500px', width:'350px', backgroundColor: "white", boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)"}}>
                <LoginBox/>
                </Container>
            </div>
        );
    }

}
export default LoginPage;