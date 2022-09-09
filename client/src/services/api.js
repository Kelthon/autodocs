import axios from 'axios'; 

const api = axios.create({
    baseURL: 'http://localhost:8080'
    // baseURL: 'https://api.autodocs.tk'
});

export default api;