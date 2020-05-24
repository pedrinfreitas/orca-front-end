import axios from 'axios';

const api = axios.create({
    baseURL: 'https://orca-dh.herokuapp.com/'
})

export default api;