import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dr-panglo-api.herokuapp.com/',
});

export default api;