import axios from 'axios';
import env from "react-dotenv";

const urlApi =  'https://hhphim.herokuapp.com/api/';

const request = axios.create({
    baseURL: urlApi,
});
export default request;
