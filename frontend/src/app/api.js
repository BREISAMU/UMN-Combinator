import axios from 'axios'

const api = axios.create({
    baseURL: 'https://shroom-spotter-ecff2ee97805.herokuapp.com/',
});

export default api;