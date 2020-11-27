import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader} from '@material-ui/core';
class AdvertList extends React.Component{

    constructor() {
        super();
        this.state = {

        };
      }
    handleClick(advertId) {
        CarConfigureService.setAdertId(advertId)
      }
    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
          <div style={{display: 'flex',
          flexWrap: 'wrap',
          justifyContent: "center",alignItems: "center",
          overflow: 'hidden'}}>
            <GridList cellHeight={400} cols={1} style={{width: '100%', height: '91%'}}>
            {this.props.data.adverts.map((tile) => (
            <Link to="/advert/details" onClick={this.handleClick.bind(this,tile.advertId)} style={{width: 765, marginBottom: 10}}>
            <GridListTile key={tile.id} style={{width: 765, backgroundColor: '#0275d8'}}>
              
              <img src={tile.url} alt={tile.price} style={{backgroundSize: 'cover',backgroundPosition: 'center'}}/>
              
              <GridListTileBar 
              subtitle={<span>{tile.brand} {tile.model} {tile.engine}</span>}
              title={<span>Total price: {tile.price} PLN</span>}
              />
              
            </GridListTile>
            </Link>
            ))}
            </GridList>
          </div>
                
        );
    }

}
export default AdvertList;