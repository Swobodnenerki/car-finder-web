import React from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import * as Const from '../static/const';
import axios from 'axios';
class RegisterDealerBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            values: {
                login: "",
                email: "",
                password: "",
                firstName: "",
                surname: "",
                phoneNumber: "",
                name: "",
                city: "",
                street: "",
                streetNumber: ""
                

            },
            badCredentails: false,
            registerSuccessful: false,
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
    async register(login, email, password, firstName, surname, phoneNumber, name, city, street, streetNumber){
        
        await axios.post(`${Const.API_URL}api/registerDealer`,{
            login: login,
            email: email,
            password: password,
            firstName: firstName,
            lastName: surname,
            phone: phoneNumber,
            name: name,
            city: city,
            street: street,
            streetNumber: streetNumber

        });
    }
    handleSubmit =  (e) => {
        e.preventDefault();
        this.register(this.state.values.login, this.state.values.email, this.state.values.password, this.state.values.firstName, this.state.values.surname, this.state.values.phoneNumber, this.state.values.name, this.state.values.city, this.state.values.street, this.state.values.streetNumber).then((res)=>
        {
            this.setState({
                registerSuccessful: true,
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
        if (this.state.registerSuccessful === true) {
            return <Redirect to='/login'/>
          }
        return(
                <Form onSubmit={this.handleSubmit}>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize: 30, fontWeight: "bold", color: "#292b2c"}}>Smart selling, with you in control</div>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize: 15, color: "#292b2c"}}>Reach hundreds of thousands of in-market buyers every month</div>
                    <div style={{height: "30px"}}></div>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Login</Form.Label>
                            <Form.Control placeholder="Enter login" type="login" name="login" value={this.state.values.login} onChange={this.handleChange} required />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Enter password" type="password" name="password" value={this.state.values.password} onChange={this.handleChange} required/>
                        </Form.Group>

                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter email" type="email" name="email" value={this.state.values.email} onChange={this.handleChange} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control placeholder="Enter phone number" type="text" name="phoneNumber" value={this.state.values.phoneNumber} onChange={this.handleChange} required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label >First name</Form.Label>
                            <Form.Control placeholder="Enter first name" type="text" name="firstName" value={this.state.values.firstName} onChange={this.handleChange} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label >Last name</Form.Label>
                            <Form.Control placeholder="Enter last name" type="text" name="surname" value={this.state.values.surname} onChange={this.handleChange} required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Company name</Form.Label>
                            <Form.Control placeholder="Enter company name" type="text" name="name"value={this.state.values.name} onChange={this.handleChange} required/>
                        </Form.Group>
                    </Form.Row>
                    
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label >City</Form.Label>
                            <Form.Control placeholder="Enter city" type="city" name="city" value={this.state.values.city} onChange={this.handleChange} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridStreet">
                            <Form.Label >Street</Form.Label>
                            <Form.Control placeholder="Enter street" type="street" name="street" value={this.state.values.street} onChange={this.handleChange} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridStreetNumber">
                            <Form.Label >Street number</Form.Label>
                            <Form.Control placeholder="Enter street number" type="number" name="streetNumber" value={this.state.values.streetNumber} onChange={this.handleChange} required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        
                    </Form.Row>
                    <div style={{height: "20px"}}></div>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <Button variant="success" type="submit" style={{fontSize: 20, fontWeight: "bold", paddingRight: 80, paddingLeft: 80}}>Sign up</Button>
                    </div>
                    <Form.Text className="text-muted" style={{textAlign: "center"}}>
                    Already have an account? <Link to="/login">Sign in</Link></Form.Text>
                    
                </Form>
        );
    }

}
export default RegisterDealerBox;