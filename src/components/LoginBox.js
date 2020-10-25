import React from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import * as Constants from '../static/const';
import AuthorizationService, { logged_userid } from '../services/AuthorizationService';
import {PersonCircle} from "react-bootstrap-icons";
import Axios from 'axios';
import NavbarLandingPage from "../components/NavbarLandingPage";
class LoginBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            values: {
                login: "",
                password: ""
            },
            badCredentails: false,
            loginSuccessful: false,
            showPopup: false
        }
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
    handleSubmit = (e) => {
        e.preventDefault();
        AuthorizationService.executeLogin(this.state.values.login,this.state.values.password).then(async (res) =>
        {
            await AuthorizationService.registerSuccessfulLogin(this.state.values.login,this.state.values.password)                 
            this.setState({
                loginSuccessful: true,
                badCredentails: false,
                showPopup: false
            })
        })
        .catch(() => {
            this.setState({
                badCredentails: true,
                showPopup: true
            })
        });

        

    }
    render(){
        if (this.state.loginSuccessful === true) {
            return <Redirect to='/homepage'/>
        }
        return(
                <Form onSubmit={this.handleSubmit}>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize: 30, fontWeight: "bold", color: "#292b2c"}}>Welcome back</div>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize: 15, color: "#292b2c"}}>Log in to your account</div>
                    <div style={{height: "40px"}}></div>
                    <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control placeholder="Enter login" type="login" placeholder="Enter login" type="login" name="login" id="login" value={this.state.values.login}
                        onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Enter password" type="password" placeholder="Password" type="password" name="password" id="password" value={this.state.values.password}
                        onChange={this.handleChange} required/>
                    </Form.Group>
                    <div style={{height: "20px"}}></div>
                    <Container style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <Button variant="success" type="submit" style={{fontSize: 20, fontWeight: "bold", paddingRight: 80, paddingLeft: 80}}>Log in</Button>
                    </Container>
                        <Form.Text className="text-muted" style={{textAlign: "center"}}>
                        Don't have an account? <Link to="/registeruser">Sign up</Link></Form.Text>    
                </Form>
        );
    }

}
export default LoginBox;