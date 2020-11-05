import React from 'react';
import {Button, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {PersonCircle} from "react-bootstrap-icons";
import NavbarLandingPage from "../components/NavbarLandingPage";
import LoginBox from "../components/LoginBox";
import axios from 'axios'
import * as Const from '../static/const';
import NavbarHome from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
class HomePage extends React.Component{
    

    render(){
        
        return(
            // <Container fluid className="main-background">
            //     <NavbarHome/>
            //     <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)', height: '91%'}}>
            //         <Row>
            //         <Jumbotron style={{backgroundColor: 'black'}}>
            //             <h1 style={{color: "white", fontSize: 40, textAlign: "center", fontWeight: "bold"}}>The car buying comparison site</h1>
            //             <p style={{color: "white", fontSize: 20, textAlign: "center"}}>Compare offers on new and nearly new cars, from top rated local and national Polish dealers.</p>
            //             <p style={{textAlign: "center"}}>
            //                <Link to="/registeruser"><Button style={{fontSize:30, paddingLeft:50, paddingRight: 50,fontWeight: "bold" }} variant="success">Select a new car</Button></Link>
            //             </p>
            //         </Jumbotron>
            //         </Row>
            //         <Row>
            //         <Container style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
            //             <Row>
            //                 <Col>
            //                     <Jumbotron style={{backgroundColor: 'black'}}>
            //                         <h1 style={{color: "white", fontSize: 20, textAlign: "center", fontWeight: "bold"}}>1. Choose your perfect car</h1>
            //                         <p style={{color: "white", fontSize: 15}}>Build and order a brand new car just the way you want it, or research any model with our impartial</p>
            //                     </Jumbotron>
            //                 </Col>
                                
            //                 <Col>
            //                     <Jumbotron style={{backgroundColor: 'black'}}>
            //                         <h1 style={{color: "white", fontSize: 20, textAlign: "center", fontWeight: "bold"}}>1. Choose your perfect car</h1>
            //                         <p style={{color: "white", fontSize: 15}}>Build and order a brand new car just the way you want it, or research any model with our impartial</p>
            //                     </Jumbotron>
            //                 </Col>

            //                 <Col>
            //                     <Jumbotron style={{backgroundColor: 'black'}}>
            //                         <h1 style={{color: "white", fontSize: 20, textAlign: "center", fontWeight: "bold"}}>1. Choose your perfect car</h1>
            //                         <p style={{color: "white", fontSize: 15}}>Build and order a brand new car just the way you want it, or research any model with our impartial</p>
            //                     </Jumbotron>
            //                 </Col>
            //             </Row>
            //         </Container>
            //         </Row>
            //     </Container>
            // </Container>

            <Container fluid className="main-background2">
                <NavbarHome/>
                <Container fluid style={{backgroundColor: 'rgba(0,0,0,0.5)', height: '91%'}}>
                    <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center", height: '20%'}}></Container>
                    <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <Jumbotron style={{backgroundColor: 'transparent'}}>
                            <h1 style={{color: "white", fontSize: 40, textAlign: "center", fontWeight: "bold"}}>The car buying comparison site</h1>
                            <p style={{color: "white", fontSize: 20, textAlign: "center"}}>Compare offers on new and nearly new cars, from top rated local and national Polish dealers.</p>
                            <p style={{textAlign: "center"}}>
                                <Link to="/configure/brand"><Button style={{fontSize:30, paddingLeft:50, paddingRight: 50,fontWeight: "bold" }} variant="success">Select a new car</Button></Link>
                            </p>
                        </Jumbotron>
                    </Container>
                    <Container>
                        <Container style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                         <Row>
                         <Col >
                                 <Jumbotron style={{backgroundColor: 'white'}}>
                                     <h1 style={{color: "black", fontSize: 20,  fontWeight: "bold"}}>1. Choose your perfect car</h1>
                                     <p style={{color: "black", fontSize: 15}}>Build and order a brand new car just the way you want it.</p>
                                 </Jumbotron>
                             </Col>
                                
                             <Col>
                                 <Jumbotron style={{backgroundColor: '#5cb85c'}}>
                                     <h1 style={{color: "white", fontSize: 20,  fontWeight: "bold"}}>2. Compare your offers</h1>
                                     <p style={{color: "white", fontSize: 15}}>Get offers from approved local and national dealers and compare price.</p>
                                 </Jumbotron>
                             </Col>

                             <Col >
                                 <Jumbotron style={{backgroundColor: '#0275d8', boxShadow: "0px 4px 4px rgba(0,0,0,1), 0px -2px 4px rgba(0, 0, 0, 0.5)"}}>
                                     <h1 style={{color: "white", fontSize: 20,  fontWeight: "bold"}}>3. Buy with confidence</h1>
                                     <p style={{color: "white", fontSize: 15}}>Simply contact your preferred dealer to book a test drive. </p>
                                 </Jumbotron>
                             </Col>
                         </Row>
                        </Container>       
                    </Container>
                </Container>
            </Container>
        );
    }

}
export default HomePage;