import axios from 'axios'

const api = axios.create({
    baseURL: 'https://umn-combinator-api-82f0c9c8dd97.herokuapp.com//',
});

export default api;