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
        localStorage.setItem(logged_dealer, dealerId)
    }

    async setAdertId(advertId) {        
        localStorage.setItem(selectedAdvert, advertId)
    }

    async setBrand(brand) {        
        localStorage.setItem(selectedBrand, brand)
    }

    async setModel(model) {        
        localStorage.setItem(selectedModel, model)
    }

    async setType(type) {        
        localStorage.setItem(selectedType, type)
    }

    async setFuelType(fuelType) {        
        localStorage.setItem(selectedFuelType, fuelType)
    }
    
    async setEngine(engine) {        
        localStorage.setItem(selectedEngine, engine)
    }
   
    async setGearbox(gerabox) {        
        localStorage.setItem(selectedGearbox, gerabox)
    }

    async setTrim(trim) {        
        localStorage.setItem(selectedTrim, trim)
    }

    async setColour(colour) {        
        localStorage.setItem(selectedColour, colour)
    }

    async setPrice(price) {        
        localStorage.setItem(selectedPrice, price)
    }

    getBrand() {
        let brand = localStorage.getItem(selectedBrand)
        if (brand === null) return ''
        return brand
    }

    getModel() {
        let model = localStorage.getItem(selectedModel)
        if (model === null) return ''
        return model
    }
}

export default new CarConfigureService();