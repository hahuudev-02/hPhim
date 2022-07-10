import axios from 'axios';
import env from "react-dotenv";

const urlApi = env.API_URL || 'http://localhost:8017/api';

const request = axios.create({
    baseURL: urlApi,
});
export default request;
