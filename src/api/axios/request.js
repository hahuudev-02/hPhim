import axios from 'axios';

const urlApi =  'https://hhphim.herokuapp.com/api';
const urlApiLocal =  'http://localhost:8017/api';

const request = axios.create({
    baseURL: urlApiLocal,
});
export default request;
