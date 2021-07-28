import axios from 'axios';


const instance = axios.create({
    // Add server URL HERE
    baseURL : "http://localhost:5001"
})


export default instance;

