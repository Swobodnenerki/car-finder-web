import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader} from '@material-ui/core';
import AdvertList from '../components/AdvertList';
class AdvertsByCity extends React.Component{

    constructor() {
        super();
        this.state = {
            adverts: [],
            price: ""
        };
      }


    componentDidMount() {

        axios.get(`${Const.API_URL}api/adverts/byCity/${localStorage.city}`  
            )
          .then(res => {
             const adverts = res.data
             console.log(res.data)
             this.setState({
                adverts: adverts
           })
         })

         

    }
    handleClick(advertId) {
        CarConfigureService.setAdertId(advertId)
        
      }
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '2%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: '#d9534f'}}></Container> 
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', backgroundColor: "transparent", fontSize: 25, fontWeight: 'bold', color: 'black',boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", width: 770 }}><p>Cars offerd in {localStorage.city}:</p></Container>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '2%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: '#d9534f'}}></Container>        
                <Container style={{justifyContent: "center",alignItems: "center", width: '800px', backgroundColor: 'transparent'}}>
                <AdvertList data={this.state} updateState={this.updateState}/>
                </Container>
                
            </div>
        );
    }

}
export default AdvertsByCity;