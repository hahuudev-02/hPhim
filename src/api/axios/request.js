import axios from 'axios';

// const urlApi = 'https://hphim.onrender.com/api';
// const urlApiLocal = 'http://localhost:8017/api';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
export default request;
