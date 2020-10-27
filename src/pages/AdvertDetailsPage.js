import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader, Grid, Paper} from '@material-ui/core';
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
            streetNumber: "",
            url: "",
            phone: "",
            email: "",
            textPhone: "Display number",
            textEmail: "Display email",
            textFollow: "",
            checkInterest: false
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
                streetNumber: advert.dealerByDealerid.streetNumber,
                phone: advert.dealerByDealerid.usersByUserid.phone,
                email: advert.dealerByDealerid.usersByUserid.email
           })
         })

         axios.get(`${Const.API_URL}api/adverts/photo/byAdvertId/${sessionStorage.advertId}`  
            )
          .then(res => {
             const photo = res.data
             console.log(res.data)
             this.setState({
                url: photo.url
           })
         })
         axios.get(`${Const.API_URL}api/interest/checkIfUserIsInterested/${sessionStorage.loggedID}/${sessionStorage.advertId}`  
            )
          .then(res => {
             const interest = res.data
             console.log(res.data)
             if(interest == true){
                this.setState({
                    textFollow: "Unfollow",
                  });
             }
             if(interest == false){
                this.setState({
                    textFollow: "Follow",
                  });
             }
             
         })

    }
    handleFollow = (textFollow) =>{
        if(textFollow == "Follow"){
            axios.post(`${Const.API_URL}api/interest`, {
                advertId: sessionStorage.advertId,
                accountId: sessionStorage.loggedID
      }).then((res) => {
        console.log(res.data);
        this.setState({ textFollow: "Unfollow" });

      });
        }
        if(textFollow == "Unfollow"){
            axios.delete(`${Const.API_URL}api/interest/byUserInterested/${sessionStorage.loggedID}/${sessionStorage.advertId}`
      ).then((res) => {
        this.setState({ textFollow: "Follow" });
      });
        }
        
    }
    changeTextPhone = (textPhone) => {

        this.setState({ textPhone }); 
      } 
    changeTextEmail = (textEmail) => {

        this.setState({ textEmail }); 
    } 

    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '8%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: 'grey'}}></Container> 
                {/* <div class="container" style={{}}>
                    <div class="row">
                        <div class="col-8" style={{backgroundColor: 'yellow', height: 400}}>col-sm-8</div>
                        <div class="col-1" style={{backgroundColor: 'white', height: 400}}>col-sm-3</div>
                        <div class="col-3" style={{backgroundColor: 'blue', height: 400}}>col-sm-3</div>
                    </div>
                    <div class="row">
                        <div class="col-sm" style={{backgroundColor: 'white', height: 50}}>col-sm</div>
                    </div>
                    <div class="row">
                        <div class="col-sm" style={{backgroundColor: 'orange', height: 200}}>col-sm</div>
                    </div>
                </div> */}
                <Container fluid style={{flexGrow: 1, width: 1000, display: "flex",justifyContent: "center",alignItems: "center"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <div style={{display: 'flex',
                                                flexWrap: 'wrap',
                                                justifyContent: "center",alignItems: "center",
                                                overflow: 'hidden'}}>
                                <GridList cellHeight={400} cols={1} >
                                    <GridListTile>
                                        <img src={this.state.url}  style={{backgroundSize: 'cover',backgroundPosition: 'center'}}/> 
                                    </GridListTile>
                                </GridList>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper style={{textAlign: 'center', backgroundColor: 'white', boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", height: 400}}>
                                <p style={{fontSize: 20, fontWeight: 'bold'}}>{this.state.brand} {this.state.model}</p>
                                <p style={{fontSize: 30, fontWeight: 'bold', color: '#5cb85c'}}>{this.state.price} PLN</p>
                                <div style={{height: 130}}></div>
                                <Button variant="primary"  onClick={() => {this.handleFollow(this.state.textFollow)}} style={{fontSize: 20, color: '#white', width: 300}}>{this.state.textFollow}</Button>
                                <div style={{height: 10}}></div>
                                <Button variant="success" onClick={ () => { this.changeTextPhone(this.state.phone)}  } style={{fontSize: 20, color: '#white', width: 300}}>{this.state.textPhone}</Button>
                                <div style={{height: 10}}></div>
                                <Button variant="success" onClick={ () => { this.changeTextEmail(this.state.email)}  } style={{fontSize: 20, color: '#white', width: 300}}>{this.state.textEmail}</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper style={{backgroundColor: 'white', boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)", height: 200}}>
                            <div class="container" style={{}}>
                                <div class="row">
                                    <div class="col-2" style={{}}>
                                        <div style={{fontSize: 20}}>Type:</div>
                                        <div style={{fontSize: 20}}>Fuel type:</div>
                                        <div style={{fontSize: 20}}>Powertrain:</div>
                                        <div style={{fontSize: 20}}>Gearbox:</div>
                                        <div style={{fontSize: 20}}>Trim:</div>
                                        <div style={{fontSize: 20}}>Colour:</div>
                                    </div>
                                    <div class="col-3">
                                        <div style={{fontSize: 20}}>{this.state.type}</div>
                                        <div style={{fontSize: 20}}>{this.state.fuelType}</div>
                                        <div style={{fontSize: 20}}>{this.state.engine}</div>
                                        <div style={{fontSize: 20}}>{this.state.gearbox}</div>
                                        <div style={{fontSize: 20}}>{this.state.trim}</div>
                                        <div style={{fontSize: 20}}>{this.state.colour}</div>
                                    </div>
                                    <div class="col-1">
                                    </div>
                                    <div class="col-2">
                                        <div style={{fontSize: 20}}>Company:</div>
                                        <div style={{fontSize: 20}}>City:</div>
                                        <div style={{fontSize: 20}}>Street:</div>
                                    </div>
                                    <div class="col-4">
                                        <div style={{fontSize: 20}}>{this.state.name}</div>
                                        <div style={{fontSize: 20}}>{this.state.city}</div>
                                        <div style={{fontSize: 20}}>{this.state.street} {this.state.streetNumber}</div>
                                    </div>
                                </div>
                            </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>

                
                {/* <Row>
                    <Col style={{backgroundColor: 'yellow', height: 500, width: 700 }}>

                    </Col>
                    <Col style={{backgroundColor: 'green', height: 500, width: 200 }}>

                    </Col>
                </Row>
                <Row style={{backgroundColor: 'orange', height: 200, width: 900}}>

                </Row> */}
            </div>
        );
    }

}
export default AdvertDetailsPage;