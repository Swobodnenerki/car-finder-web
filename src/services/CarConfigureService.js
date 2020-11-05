import axios from 'axios';
import * as Const from '../static/const';

export const logged_username = 'loggedUser';
export const logged_userid = 'loggedID';
export const selectedBrand = 'brand';
export const selectedModel = 'model';
export const selectedType = 'type';
export const selectedFuelType = 'fuelType';
export const selectedEngine = 'engine';
export const selectedGearbox = 'gearbox';
export const selectedTrim = 'trim';
export const selectedColour = 'colour';
export const selectedPrice = 'price';
export const selectedAdvert = 'advertId';
export const logged_dealer = 'dealerId'
class CarConfigureService{
    async setDealerId(dealerId) {        
        sessionStorage.setItem(logged_dealer, dealerId)
    }

    async setAdertId(advertId) {        
        sessionStorage.setItem(selectedAdvert, advertId)
    }

    async setBrand(brand) {        
        sessionStorage.setItem(selectedBrand, brand)
    }

    async setModel(model) {        
        sessionStorage.setItem(selectedModel, model)
    }

    async setType(type) {        
        sessionStorage.setItem(selectedType, type)
    }

    async setFuelType(fuelType) {        
        sessionStorage.setItem(selectedFuelType, fuelType)
    }
    
    async setEngine(engine) {        
        sessionStorage.setItem(selectedEngine, engine)
    }
   
    async setGearbox(gerabox) {        
        sessionStorage.setItem(selectedGearbox, gerabox)
    }

    async setTrim(trim) {        
        sessionStorage.setItem(selectedTrim, trim)
    }

    async setColour(colour) {        
        sessionStorage.setItem(selectedColour, colour)
    }

    async setPrice(price) {        
        sessionStorage.setItem(selectedPrice, price)
    }

    getBrand() {
        let brand = sessionStorage.getItem(selectedBrand)
        if (brand === null) return ''
        return brand
    }

    getModel() {
        let model = sessionStorage.getItem(selectedModel)
        if (model === null) return ''
        return model
    }
}

export default new CarConfigureService();