import React from 'react';
import {Button, Nav, Form, FormControl, Container, Jumbotron, Row, Col, NavDropdown }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Redirect } from "react-router-dom";
import * as Const from '../static/const';
import axios from 'axios';
import Navbar from '../components/Nabar';
import EditUserBox from '../components/EditUserBox';
import EditDealerBox from '../components/EditDealerBox';
class UserEditDetailsPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
                email: "",
                firstName: "",
                surname: "",
                phoneNumber: "",
                name: "",
                city: "",
                street: "",
                streetNumber: "",
                

            
            badCredentails: false,
            updateSuccessful: false,
            showPopup: false
        }
        this.updateState = this.updateState
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        if(localStorage.dealerId == 0){
            axios.get(`${Const.API_URL}api/user/${localStorage.loggedID}`  
            )
          .then(res => {
            let user = res.data;
            this.setState({firstName: user.firstName})
            this.setState({surname: user.lastName})
            this.setState({email: user.email})
            this.setState({phoneNumber: user.phone})
          })
        }
        else{
            axios.get(`${Const.API_URL}api/dealer/${localStorage.loggedID}`  
            )
          .then(res => {
            let dealer = res.data;
            console.log(dealer)
            this.setState({firstName: dealer.firstName})
            this.setState({surname: dealer.lastName})
            this.setState({email: dealer.email})
            this.setState({phoneNumber: dealer.phone})
            this.setState({name: dealer.name})
            this.setState({city: dealer.city})
            this.setState({street: dealer.street})
            this.setState({streetNumber: dealer.streetNumber})
          })
        }
        
      }

      updateState = (name, value) => {
        this.setState({[name]: value})
    }
    async updateUser(email, firstName, surname, phoneNumber){
        
        await axios.put(`${Const.API_URL}api/user/${localStorage.loggedID}`,{
            email: email,
            firstName: firstName,
            lastName: surname,
            phone: phoneNumber,

        });
    }
    async updateDealer(email, firstName, surname, phoneNumber, name, city, street, streetNumber){
        
        await axios.put(`${Const.API_URL}api/dealer/${localStorage.loggedID}`,{
            email: email,
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
        if(localStorage.dealerId !=0){
            this.updateDealer(this.state.email, this.state.firstName, this.state.surname, this.state.phoneNumber, this.state.name, this.state.city, this.state.street, this.state.streetNumber).then((res)=>
        {
            this.setState({
                updateSuccessful: true,
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
        else{
            this.updateUser(this.state.email, this.state.firstName, this.state.surname, this.state.phoneNumber).then((res)=>
        {
            this.setState({
                updateSuccessful: true,
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
        
    }
    
    render(){
        if(localStorage.dealerId != 0){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', width:'20%', backgroundColor: "transparent"}}></Container>
                <Container fluid style={{display: "flex",height: 'flex', alignItems: "center", justifyContent: "center", width:'750', backgroundColor: "white", boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", paddingBottom: '10', paddingTop: '20', }}>
                <Form onSubmit={this.handleSubmit}>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize: 30, fontWeight: "bold", color: "#292b2c"}}>Edit your accout details</div>
                    <div style={{height: "30px"}}></div>
                    <EditDealerBox data={this.state} updateState={this.updateState}/>
                    <div style={{height: "20px"}}></div>
                    <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <Button variant="success" type="submit" style={{fontSize: 20, fontWeight: "bold", paddingRight: 80, paddingLeft: 80}}>Edit</Button>
                    </div>
                    
                </Form>
                </Container>
            </div>
                
        );
        }
            return(
                <div>
                    <Navbar/>
                    <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', width:'20%', backgroundColor: "transparent"}}></Container>
                    <Container fluid style={{display: "flex",height: 'flex', alignItems: "center", justifyContent: "center", width:'750', backgroundColor: "white", boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", paddingBottom: '10', paddingTop: '20', }}>
                    <Form onSubmit={this.handleSubmit}>
                        <div style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize: 30, fontWeight: "bold", color: "#292b2c"}}>Edit your accout details</div>
                        <div style={{height: "30px"}}></div>
                        <EditUserBox data={this.state} updateState={this.updateState}/>
                        <div style={{height: "20px"}}></div>
                        <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <Button variant="success" type="submit" style={{fontSize: 20, fontWeight: "bold", paddingRight: 80, paddingLeft: 80}}>Edit</Button>
                        </div>
                        
                    </Form>
                    </Container>
                </div>
                    
            );
            
    }

}
export default UserEditDetailsPage;