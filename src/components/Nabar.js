import React from 'react';
import {Button, Navbar, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {PersonCircle} from "react-bootstrap-icons"
import { Link } from "react-router-dom";
import axios from 'axios'
import * as Const from '../static/const';
import CarConfigureService from '../services/CarConfigureService';
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
         axios.get(`${Const.API_URL}api/dealerIdByAccountId/${sessionStorage.loggedID}`  
         )
       .then(res => {
          const status = res.data
          console.log(res.data)
          CarConfigureService.setDealerId(status)
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
                    <Navbar.Brand href="/homepage" style={{color: "white", fontWeight: "bold", fontSize: "36"}}><Link to="/homepage" style={{color: "white"}}>CarFinder</Link></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link style={{color: "white", fontWeight: "bold", fontSize: "18"}}><Link to="/advert/followed" style={{color: "white"}}>Followed</Link></Nav.Link>
                        <Nav.Link style={{color: "white", fontWeight: "bold", fontSize: "18"}}><Link to="/configure/brand" style={{color: "white"}}>Select a car</Link></Nav.Link>
                    </Nav>
                    <Link to="#account"><PersonCircle color="white" size={40} /></Link>
                </Navbar>
        );    
        }
        return(
                <Navbar bg="primary" variant="dark" style={{height: '9%'}}>
                    <Navbar.Brand href="/homepage" style={{color: "white", fontWeight: "bold", fontSize: "36"}}><Link to="/homepage" style={{color: "white"}}>CarFinder</Link></Navbar.Brand>
                    <Nav className="mr-auto" >
                    <Nav.Link style={{color: "white", fontWeight: "bold", fontSize: "18"}}><Link to="/advert/followed" style={{color: "white"}}>Followed</Link></Nav.Link>
                    <Nav.Link style={{color: "white", fontWeight: "bold", fontSize: "18"}}><Link to="/configure/brand" style={{color: "white"}}>Select a car</Link></Nav.Link>
                    <Nav.Link style={{color: "white", fontWeight: "bold", fontSize: "18"}}><Link to="/advert/add" style={{color: "white"}}>New advert</Link></Nav.Link>
                    <Nav.Link style={{color: "white", fontWeight: "bold", fontSize: "18"}}><Link to="/advert/dealer" style={{color: "white"}}>Yours adverts</Link></Nav.Link>
                    </Nav>
                    <Link to="#account"><PersonCircle color="white" size={40} /></Link>
                </Navbar>
                
        );
    }

}
export default NavbarHome;