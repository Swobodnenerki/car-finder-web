import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link, Redirect } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader, Grid, Paper} from '@material-ui/core';
import { render } from '@testing-library/react';
import AuthorizationService from '../services/AuthorizationService';
import {PersonFill, EnvelopeFill, TelephoneFill, Building, GeoAltFill} from "react-bootstrap-icons";
class UserDetailsPage extends React.Component{

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            name: "",
            city: "",
            street: "",
            streetNumber: "",

        };
      }
      
      handleClick =  (e) => {
        AuthorizationService.logout()
    }
    
    componentDidMount() {
        console.log(localStorage.dealerId)
        if(localStorage.dealerId==0){
            axios.get(`${Const.API_URL}api/user/${localStorage.loggedID}`  
            )
          .then(res => {
            let user = res.data;
            console.log(user)
            this.setState({firstName: user.firstName})
            this.setState({lastName: user.lastName})
            this.setState({email: user.email})
            this.setState({phone: user.phone})
          })
        }
        else{
            axios.get(`${Const.API_URL}api/dealer/${localStorage.loggedID}`  
            )
          .then(res => {
            let dealer = res.data;
            console.log(dealer)
            this.setState({firstName: dealer.firstName})
            this.setState({lastName: dealer.lastName})
            this.setState({email: dealer.email})
            this.setState({phone: dealer.phone})
            this.setState({name: dealer.name})
            this.setState({city: dealer.city})
            this.setState({street: dealer.street})
            this.setState({streetNumber: dealer.streetNumber})
          })
        }
        }
        dealerData(){
            if(localStorage.dealerId != 0){
                return(
                    <div>
                        <div class="row" style={{marginBottom: 30}}>
                            <div class="col-2" style={{}}>
                                <Building color="black" size={30} />
                            </div>
                            <div class="col-8" style={{fontSize: 20}}>
                                {this.state.name}
                            </div>
                            <div class="col-1"></div>
                        </div>
                        <div class="row" style={{marginBottom: 30}}>
                            <div class="col-2" style={{}}>
                                <GeoAltFill color="black" size={30} />
                            </div>
                            <div class="col-8" style={{fontSize: 20}}>
                                {this.state.city}, {this.state.street} {this.state.streetNumber}
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                );
            }
        }
        
    render(){
        return(
            <div>
                <Navbar/>
               
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '15%', width:'20%', backgroundColor: "transparent"}}></Container>
                <Container fluid style={{display: "flex",height: 'flex', alignItems: "center", justifyContent: "center", width:'400', backgroundColor: "white", boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", paddingBottom: '10', paddingTop: '20', }}>
                    <div class="container" style={{}}>
                        <div class="row" style={{marginBottom: 20, alignItems: "center", justifyContent: "center", fontWeight: 'bold', fontSize: 30}}>
                            Your account details
                        </div>
                        <div class="row" style={{marginBottom: 30}}>
                            <div class="col-2" style={{}}>
                                <PersonFill color="black" size={30} />
                            </div>
                            <div class="col-8" style={{fontSize: 20}}>
                                {this.state.firstName} {this.state.lastName}
                            </div>
                            <div class="col-1"></div>
                        </div>
                        <div class="row" style={{marginBottom: 30}}>
                            <div class="col-2" style={{}}>
                                <EnvelopeFill color="black" size={30} />
                            </div>
                            <div class="col-8" style={{fontSize: 20}}>
                                {this.state.email}
                            </div>
                            <div class="col-1"></div>
                        </div>
                        <div class="row" style={{marginBottom: 30}}>
                            <div class="col-2" style={{}}>
                                <TelephoneFill color="black" size={30} />
                            </div>
                            <div class="col-8" style={{fontSize: 20}}>
                                {this.state.phone}
                            </div>
                            <div class="col-1"></div>
                        </div>
                        {this.dealerData()}
                        <div class="row" style={{marginBottom: 10, marginTop: 30}}>
                            <div class="col-1"></div>
                            <div class="col-4" style={{}}>
                            <Link to="/details/edit"><Button variant="success" style={{fontSize: 25, width: 125}}>Edit</Button></Link>
                            </div>
                            
                            <div class="col-4" style={{}}>
                            <Link to="/"><Button variant="success" onClick={this.handleClick} style={{fontSize: 25, width: 125, marginLeft: 20}}>Logout</Button></Link>
                            </div>
                            <div class="col-1"></div>
                        
                        </div>
                    </div>
                   
                </Container>
            </div>
        );
    }

}
export default UserDetailsPage;