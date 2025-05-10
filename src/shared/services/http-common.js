import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},

    //CORS [Cross-Origin Resource Sharing](trying to access different server)
    //frontend in localhost:3000 and backend in localhost:5000 [different might cause CORS privacy error]
    //accept all solicitudes without restrictions

});

export default http;