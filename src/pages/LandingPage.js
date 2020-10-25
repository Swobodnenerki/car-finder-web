import React from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPageStyle from '../styles/LandingPageStyle.css';
import {PersonCircle} from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import NavbarLandingPage from '../components/NavbarLandingPage';
class LandingPage extends React.Component{
    render(){
        return(
            <Container fluid className="main-background">
                <NavbarLandingPage/>
                <Container fluid style={{display: "flex",justifyContent: "center",alignItems: "center", backgroundColor: 'rgba(0,0,0,0.5)', height: '91%'}}>
                    <Jumbotron style={{backgroundColor: 'transparent'}}>
                        <h1 style={{color: "white", fontSize: 60, textAlign: "center", fontWeight: "bold"}}>Join CarFinder!</h1>
                        <p style={{color: "white", fontSize: 40, textAlign: "center"}}>We make it easy to research and buy your next car.
                            We'll find you the best<br/> offers from top dealers
                            so you can be confident you're getting a great deal.<br/>
                            No hassle, no haggle.
                        </p>
                        <p style={{textAlign: "center"}}>
                           <Link to="/registeruser"><Button style={{fontSize:40, paddingLeft:100, paddingRight: 100,fontWeight: "bold" }} variant="success">Join now</Button></Link>
                        </p>
                    </Jumbotron>
                </Container>
            </Container>
        );
    }

}
export default LandingPage;