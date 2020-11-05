import React from 'react';
import {Button, Nav, Form, Card, FormControl, Container, ListGroup, Jumbotron, Row, Col, NavDropdown, NavLink }from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Nabar';
import CarConfigureService from '../services/CarConfigureService';
import { Link, Redirect } from 'react-router-dom';
import * as Const from '../static/const';
import axios from 'axios';
import {GridList, GridListTile, GridListTileBar, ButtonBase, ListSubheader, Grid, Paper, InputLabel, Select, MenuItem} from '@material-ui/core';
import { render } from '@testing-library/react';


class NewAdvertPage extends React.Component{

    constructor() {
        super();
        this.state = {
            brands: [],
            models: [],
            types: [],
            fuelTypes: [],
            engines: [],
            gearboxes: [],
            trims: [],
            colours: [],
            brand: "",
            model: "",
            type: "",
            fuelType: "",
            engine: "",
            gearbox: "",
            trim: "",
            colour: "",
            price: "",
            url: "",
            badCredentails: false,
            addSuccessful: false,
            showPopup: false
        };
      }


    componentDidMount() {
        axios.get(`${Const.API_URL}api/configure`  
            )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                brands: carSpecs
           })
         })


    }
    
    handleChangeBrand = (event) => {
        let brand = event.target.value
        console.log(brand)
        this.setState({
            brand: brand
       })
       axios.get(`${Const.API_URL}api/configure/byBrand/${brand}`
            )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                models: carSpecs
           })
         })

      };
    handleChangeModel = (event) => {
        let model = event.target.value
        console.log(model)
        this.setState({
            model: model
        })
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/${this.state.brand}/${model}`  
        )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                types: carSpecs
           })
         })
    };
    handleChangeType = (event) => {
        let type = event.target.value
        console.log(type)
        this.setState({
            type: type
        })
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/${this.state.brand}/${this.state.model}/${type}`  
        )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                fuelTypes: carSpecs
           })
         })
    };
    handleChangeFuelType = (event) => {
        let fuelType = event.target.value
        console.log(fuelType)
        this.setState({
            fuelType: fuelType
        })
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/${this.state.brand}/${this.state.model}/${this.state.type}/${fuelType}`  
        )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                engines: carSpecs
           })
         })
    };
    handleChangeEngine = (event) => {
        let engine = event.target.value
        console.log(engine)
        this.setState({
            engine: engine
        })
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/byEngine/${this.state.brand}/${this.state.model}/${this.state.type}/${this.state.fuelType}/${engine}`  
        )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                gearboxes: carSpecs
           })
         })
    };
    handleChangeGearbox = (event) => {
        let gearbox = event.target.value
        console.log(gearbox)
        this.setState({
            gearbox: gearbox
        })
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/byEngine/byGearbox/${this.state.brand}/${this.state.model}/${this.state.type}/${this.state.fuelType}/${this.state.engine}/${gearbox}`  
        )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                trims: carSpecs
           })
         })
    };
    handleChangeTrim = (event) => {
        let trim = event.target.value
        console.log(trim)
        this.setState({
            trim: trim
        })
        axios.get(`${Const.API_URL}api/configure/byBrand/byModel/byType/byFuelType/byEngine/byGearbox/byTrim/${this.state.brand}/${this.state.model}/${this.state.type}/${this.state.fuelType}/${this.state.engine}/${this.state.gearbox}/${trim}`  
        )
          .then(res => {
             const carSpecs = res.data
             console.log(res.data)
             this.setState({
                colours: carSpecs
           })
         })
    };
    handleChangeColour = (event) => {
        let colour = event.target.value
        console.log(colour)
        this.setState({
            colour: colour
        })
    };
    handleChange = (e) => {
        this.setState({
                ...this.state.values, [e.target.name]: e.target.value
        });
    }
    async addAdvert(brand, model, type, fuelType, engine, gearbox, trim, colour, price, url){
        
        await axios.post(`${Const.API_URL}api/adverts/dealer`,{
            brand: brand,
            model: model,
            type: type,
            fuelType: fuelType,
            engine: engine,
            gearbox: gearbox,
            trim: trim,
            colour: colour,
            price: price,
            url: url,
            dealerId: sessionStorage.dealerId

        });
    }
    handleSubmit =  (e) => {
        e.preventDefault();
        this.addAdvert(this.state.brand, this.state.model, this.state.type, this.state.fuelType, this.state.engine, this.state.gearbox, this.state.trim, this.state.colour, this.state.price, this.state.url).then((res)=>
        {
            this.setState({
                addSuccessful: true,
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

    updateState = (name, value) => {
        this.setState({ [name]: value });
      };
    render(){
        if (this.state.addSuccessful === true) {
            return <Redirect to='/homepage'/>
          }
        return(
            <div>
                <Navbar/>
                <div style={{height: "30px"}}></div>
                <Container fluid style={{justifyContent: "center",maxHeight: '650px', maxWidth:'750px', backgroundColor: "white", boxShadow: "0px 4px 4px rgba(0,0,0,0.5), 0px -2px 4px rgba(0, 0, 0, 0.25)"}}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Form.Group controlId="formGridState" as={Col}>
                            <Form.Label>Choose brand</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeBrand} updateState={this.updateState.bind(this)} required>
                            {this.state.brands.map((item)=>(
                                <option >{item}</option>
                                ))}
                            </Form.Control>
                            
                        </Form.Group>
                        <Form.Group as={Col}>
                        <Form.Label>Choose model</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeModel} updateState={this.updateState.bind(this)} required>
                            {this.state.models.map((item)=>(
                                <option>{item}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group  as={Col}>
                            <Form.Label>Choose type</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeType} updateState={this.updateState.bind(this)} required>
                            {this.state.types.map((item)=>(
                                <option >{item}</option>
                                ))}
                            </Form.Control>  
                        </Form.Group>
                        
                    </Form.Row>
                    <Form.Row>
                        <Form.Group  as={Col}>
                            <Form.Label>Choose fuel type</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeFuelType} updateState={this.updateState.bind(this)} required>
                            {this.state.fuelTypes.map((item)=>(
                                <option >{item}</option>
                                ))}
                            </Form.Control>  
                        </Form.Group>
                        <Form.Group  as={Col}>
                            <Form.Label>Choose engine</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeEngine} updateState={this.updateState.bind(this)} required>
                            {this.state.engines.map((item)=>(
                                <option >{item}</option>
                                ))}
                            </Form.Control>  
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Choose gearbox</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeGearbox} updateState={this.updateState.bind(this)} required>
                            {this.state.gearboxes.map((item)=>(
                                <option >{item}</option>
                                ))}
                            </Form.Control>  
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Choose trim</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeTrim} updateState={this.updateState.bind(this)} required>
                            {this.state.trims.map((item)=>(
                                <option >{item}</option>
                                ))}
                            </Form.Control>  
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Choose colour</Form.Label>
                            <Form.Control as="select" onClick={this.handleChangeColour} updateState={this.updateState.bind(this)} required>
                            {this.state.colours.map((item)=>(
                                <option >{item}</option>
                                ))}
                            </Form.Control>  
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Type price</Form.Label>
                            <Form.Control type="number" name="price" onChange={this.handleChange} updateState={this.updateState.bind(this)} required>
                            </Form.Control>  
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Type photo url</Form.Label>
                            <Form.Control type="text" name="url" onChange={this.handleChange} updateState={this.updateState.bind(this)} required>
                            </Form.Control>  
                        </Form.Group>
                    </Form.Row>
                    <Button variant="success" type="submit" style={{fontSize: 20, fontWeight: "bold", paddingRight: 80, paddingLeft: 80}}>Add new advert</Button>
                </Form>
                </Container>
            </div>
        );
    }

}
export default NewAdvertPage;