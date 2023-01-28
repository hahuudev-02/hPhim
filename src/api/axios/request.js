import axios from 'axios';

const urlApi =  'https://hphim.onrender.com/api';
const urlApiLocal =  'http://localhost:8017/api';

const request = axios.create({
    baseURL: urlApi,
});
export default request;
