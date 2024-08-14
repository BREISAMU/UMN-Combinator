import axios from 'axios'

const hosted = 'https://umn-combinator-api-82f0c9c8dd97.herokuapp.com//'
const localHost = 'http://127.0.0.1:8000/'

const api = axios.create({
    baseURL: hosted
});

export default api;