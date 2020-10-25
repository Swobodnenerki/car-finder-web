import axios from 'axios';
import * as Const from '../static/const';

export const logged_username = 'loggedUser';
export const logged_userid = 'loggedID';
export const selectedBrand = 'brandS';

class CarConfigureService{
    

    async selectBrand(brand) {        
        sessionStorage.setItem(selectedBrand, brand)
    }
   
    getSelectedBrand() {
        let brand = sessionStorage.getItem(selectedBrand)
        if (brand === null) return ''
        return brand
    }
}

export default new CarConfigureService();