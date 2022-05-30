
import axios from "axios";
import { config } from "../config";

axios.defaults.baseURL = config.API_URL;

axios.defaults.headers.post["Content-Type"] = "applciation/json";

axios.interceptors.response.use(
    function (response: any) {
        return response.data ? response.data : response;
    },
    function (error: any) {
        let message;
        switch (error.status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                message = "Invalid credentials";
                break;
            case 404:
                message = "Sorry! the data you are looking for could not be found";
                break;
            default:
                message = error.message || error;
        }
        return Promise.reject(message);
    }

);

class APIClient {

    get = (url: string, params?: {}) => {
        return axios.get(url, params);
    }

    create = (url: string, data?: {}) => {
        return axios.post(url, data);
    }
}


const getLoggedinUser = () => {
    const user = localStorage.getItem("authUser");
    if(!user){
        return null;
    }else {
        return JSON.parse(user);
    }
}

const setAuthorization = (token: any) => {
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  };

export {APIClient, getLoggedinUser , setAuthorization};