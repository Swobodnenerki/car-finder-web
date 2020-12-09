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
class AdvertPage extends React.Component{

    constructor() {
        super();
        this.state = {
            adverts: [],
            price: ''
        };
      }


    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/byEngine/byGearbox/byTrim/byColour/${localStorage.brand}/${localStorage.model}/${localStorage.type}/${localStorage.fuelType}/${localStorage.engine}/${localStorage.gearbox}/${localStorage.trim}/${localStorage.colour}`  
            )
          .then(res => {
             const price = res.data
             console.log(res.data)
             this.setState({
                price: price
           })
         })
        axios.get(`${Const.API_URL}api/adverts/byBrand/byModel/byType/byFuelType/byEngine/byGearbox/byTrim/byColour/${localStorage.brand}/${localStorage.model}/${localStorage.type}/${localStorage.fuelType}/${localStorage.engine}/${localStorage.gearbox}/${localStorage.trim}/${localStorage.colour}`  
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
    checkPrice = (listPrice, carPrice) => {
      const difference = listPrice - carPrice;
      if(difference>0){
        return (<span >You can save: {difference} PLN</span>);
      }
      if(difference<0){
        return (<span style={{color: 'red'}}>You are losing: {0-difference} PLN</span>);
      }
      if(difference == 0){
        return (<span style={{color: 'white'}}>You are paying list price</span>);
      }
    } 
    render(){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '2%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: '#d9534f'}}></Container> 
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: 'black',boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", width: 770 }}><p>Offers found for: {localStorage.brand} {localStorage.model} {localStorage.engine}<br/>Base price: <span style={{color: '#d9534f'}}>{this.state.price} PLN </span> </p></Container>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '2%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: '#d9534f'}}></Container>        
                <Container style={{justifyContent: "center",alignItems: "center", width: '800px', backgroundColor: 'transparent'}}>
                <div style={{display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: "center",alignItems: "center",
                                        overflow: 'hidden'}}>
                        <GridList cellHeight={400} cols={1} style={{width: '100%', height: '91%'}}>
                            {this.state.adverts.map((tile) => (
                            <Link to="/advert/details" onClick={this.handleClick.bind(this,tile.advertId)} style={{width: 765, marginBottom: 10}}>
                            <GridListTile key={tile.id} style={{width: 765, backgroundColor: '#0275d8'}}>
                                
                                <img src={tile.url} alt={tile.price} style={{backgroundSize: 'cover',backgroundPosition: 'center'}}/>
                                
                                <GridListTileBar 
                                title={this.checkPrice(this.state.price, tile.price)}
                                />
                                
                            </GridListTile>
                            </Link>
                            ))}
                        </GridList>
                        </div>
                </Container>
                
            </div>
        );
    }

}
export default AdvertPage;