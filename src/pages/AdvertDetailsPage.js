import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader} from '@material-ui/core';
class AdvertDetailsPage extends React.Component{

    constructor() {
        super();
        this.state = {
            brand: "",
            model: "",
            type: "",
            fuelType: "",
            engine: "",
            gearbox: "",
            trim: "",
            colour: "",
            price: "",
            name: "",
            city: "",
            street: "",
            streetNumber: ""
        };
      }


    componentDidMount() {
        axios.get(`${Const.API_URL}api/adverts/byId/${sessionStorage.advertId}`  
            )
          .then(res => {
             const advert = res.data
             console.log(res.data)
             this.setState({
                brand: advert.brand,
                model: advert.model,
                type: advert.type,
                fuelType: advert.fuelType,
                engine: advert.engine,
                gearbox: advert.gearbox,
                trim: advert.trim,
                colour: advert.colour,
                price: advert.price,
                name: advert.dealerByDealerid.name,
                city: advert.dealerByDealerid.city,
                street: advert.dealerByDealerid.street,
                streetNumber: advert.dealerByDealerid.streetNumber
           })
         })
    }
    
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                {this.state.name}
            </div>
        );
    }

}
export default AdvertDetailsPage;