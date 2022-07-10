import axios from 'axios';

const urlApi = 'http://localhost:8017/api';

const request = axios.create({
    baseURL: 'http://localhost:8017/api',
});
export default request;
