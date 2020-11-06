import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import * as Const from '../static/const';

export const logged_username = 'loggedUser';
export const logged_userid = 'loggedID';

class AuthorizationService{
    
    executeLogin(login, password){
        /*return axios.post(`http://localhost:8080/login`,
        
        )*/
        return axios.get(`${Const.API_URL}api/authenticate`,
            { headers: { authorization: this.createBasicAuthToken(login, password) }      
            } )
    }

    createBasicAuthToken(username, password) {
        var token = "Basic " + window.btoa(username + ":" + password);
        localStorage.setItem("token", token);
        return token;
    }

    async registerSuccessfulLogin(login,password) {        
        localStorage.setItem(logged_username, login)        
        this.createBasicAuthToken(login, password);
        await axios.get(`${Const.API_URL}api/session`).then(
            async (res) => {
                const userId = res.data.userId;
                await localStorage.setItem(logged_userid,userId);                
            }
        ).catch((error) => console.log(error))
    }
    
    logout() {
        localStorage.removeItem(logged_username);
        localStorage.removeItem(logged_userid);
    }

    isUserLoggedIn() {
        let user = localStorage.getItem(logged_username)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = localStorage.getItem(logged_username)
        if (user === null) return ''
        return user
    }

    getLoggedInUserId() {
        let id = localStorage.getItem(logged_userid);
        if(id === null) return '';
        return id;
    }
}

export default new AuthorizationService();