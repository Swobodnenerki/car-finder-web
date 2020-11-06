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
            checkInterest: false,
            dealerId: "",
            creator: false,
            deleteSuccessful: false,
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
                email: advert.dealerByDealerid.usersByUserid.email,
                dealerId: advert.dealerByDealerid.id
           })
         })

         axios.get(`${Const.API_URL}api/adverts/photo/byAdvertId/${sessionStorage.advertId}`  
            )
          .then(res => {
             const photo = res.data
             console.log(sessionStorage.dealerId)
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
         axios.get(`${Const.API_URL}api/dealerIdByAccountId/${sessionStorage.loggedID}`  
            )
          .then(res => {
             const dealerId = res.data
             console.log(res.data)
             if(dealerId == this.state.dealerId){
                this.setState({
                    creator: true,
                  });
             }
         })


    }
    ifcostam(){
        console.log(sessionStorage.dealerId)
        console.log(this.state.dealerId)
        if(sessionStorage.dealerId == this.state.dealerId){
            return(
                <Button variant='primary' onClick={this.handleDelete} style={{fontSize: 20, color: '#white', width: 300}}>Delete</Button>
            );
        }
        else{
            return(
                <div style={{height: 50}}></div>
            );
        }
        
             
    }
    handleDelete =  (e) => {
        e.preventDefault();
        axios.delete(`${Const.API_URL}api/adverts/delete/${sessionStorage.advertId}`).then((res)=>
        {
            this.setState({
                deleteSuccessful: true,
            })
        });
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
        if (this.state.deleteSuccessful === true) {
            return <Redirect to='/advert/dealer'/>
          }
        return(
            <div>
                <Navbar/>
                <Container style={{display: "flex",justifyContent: "center",alignItems: "center",height: '8%', backgroundColor: "transparent", fontSize: 20, fontWeight: 'bold', color: 'grey'}}></Container> 
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
                                <p style={{fontSize: 30, fontWeight: 'bold'}}>{this.state.brand} {this.state.model}</p>
                                <p style={{fontSize: 25, fontWeight: 'bold', color: '#5cb85c'}}>Price: {this.state.price} PLN</p>
                                <div style={{height: 70}}></div>
                                {this.ifcostam()}
                                <div style={{height: 10}}></div>
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
            </div>
        );
    }

}
export default AdvertDetailsPage;