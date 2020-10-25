import React from 'react';
import {Button, Tab, ListGroup, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
class CarConfigureList extends React.Component{

    constructor(props){
        super(props)
        this.state={

        };
    }

     updateState = (name, value) => {
        this.setState({[name]: value})
    }

    render(){
        return(
            <div>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                        <ListGroup>
                            {this.props.data && this.props.data.map((item)=>(
                                <ListGroup.Item key={item.id}>
                                    {item.brand}
                                </ListGroup.Item>
                            ))}
    
                        </ListGroup>
                        </Col>
                    </Row>
                    </Tab.Container>
            </div>
        );
    }

}
export default CarConfigureList;