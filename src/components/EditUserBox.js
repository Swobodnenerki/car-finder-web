import React from 'react'
import {Button, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import * as Const from '../static/const';
import axios from 'axios';
import Navbar from '../components/Nabar';
class EditUserBox extends React.Component{

    handleChange = (e) => {
        const {value, name} = e.target;
        this.props.updateState(name,value);
      }

    render(){
        return(
            <div>
                <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Enter email" type="email" name="email" value={this.props.data.email} onChange={this.handleChange} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control placeholder="Enter phone number" type="text" name="phoneNumber"  value={this.props.data.phoneNumber} onChange={this.handleChange} required/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label >First name</Form.Label>
                            <Form.Control placeholder="Enter first name" type="text" name="firstName"  value={this.props.data.firstName} onChange={this.handleChange} required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label >Last name</Form.Label>
                            <Form.Control placeholder="Enter last name" type="text" name="surname"  value={this.props.data.surname} onChange={this.handleChange} required/>
                        </Form.Group>
                    </Form.Row>
            </div>
        )
    };

}

export default EditUserBox;