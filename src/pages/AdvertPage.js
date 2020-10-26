import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader} from '@material-ui/core';
class AdvertPage extends React.Component{

    constructor() {
        super();
        this.state = {
            adverts: [],
            price: '',
        };
      }


    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/byEngine/byGearbox/byTrim/byColour/${sessionStorage.brand}/${sessionStorage.model}/${sessionStorage.type}/${sessionStorage.fuelType}/${sessionStorage.engine}/${sessionStorage.gearbox}/${sessionStorage.trim}/${sessionStorage.colour}`  
            )
          .then(res => {
             const price = res.data
             console.log(res.data)
             this.setState({
                price: price
           })
         })
        axios.get(`${Const.API_URL}api/adverts/byBrand/byModel/byType/byFuelType/byEngine/byGearbox/byTrim/byColour/${sessionStorage.brand}/${sessionStorage.model}/${sessionStorage.type}/${sessionStorage.fuelType}/${sessionStorage.engine}/${sessionStorage.gearbox}/${sessionStorage.trim}/${sessionStorage.colour}`  
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
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '2%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: '#d9534f'}}>
        </Container> 
        <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '10%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: 'black',boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", width: 770 }}><p>Offers found for: {sessionStorage.brand} {sessionStorage.model} {sessionStorage.engine}<br/>Base price: <span style={{color: '#d9534f'}}>{this.state.price} PLN </span> </p></Container>
        <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '2%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: '#d9534f'}}>
        </Container>        
                <Container style={{justifyContent: "center",alignItems: "center", width: '800px', backgroundColor: 'transparent'}}>
                    {/* <GridList cols={1} style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                    {this.state.adverts && this.state.adverts.map((tile)=>(
                        <Card className="bg-dark text-white" key={tile.id} style={{display: "flex",justifyContent: "center",alignItems: "center", height: '400px', width: '711px', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '10px'}}>
                            <Card.Img src={tile.url} alt="Card image"  />
                            <Card.ImgOverlay style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                <Card.Title>{tile.price}</Card.Title>
                                <Card.Text>
                                {tile.brand + " " + tile.model}
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    ))}  
                    </GridList> */}
                        <div style={{display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: "center",alignItems: "center",
                                        overflow: 'hidden'}}>
                        <GridList cellHeight={400} cols={1} style={{width: '100%', height: '91%'}}>
                            {this.state.adverts.map((tile) => (
                            <Link to="/advert/details" onClick={this.handleClick.bind(this,tile.advertId)} style={{width: 770, marginBottom: 10}}>
                            <GridListTile key={tile.id} style={{width: 770, backgroundColor: '#0275d8'}}>
                                
                                <img src={tile.url} alt={tile.price} style={{backgroundSize: 'cover',backgroundPosition: 'center'}}/>
                                
                                <GridListTileBar 
                                title={<span >You can save: {this.state.price-tile.price} PLN</span>}
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