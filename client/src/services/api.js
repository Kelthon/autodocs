import axios from 'axios'; 

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND
    // baseURL: 'https://api.autodocs.tk'
});

export default api;