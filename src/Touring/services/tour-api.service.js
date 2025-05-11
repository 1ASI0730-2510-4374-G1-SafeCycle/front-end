import axios from "axios";

const tourApiURL =  import.meta.env.VITE_API_TOUR;
const tourApiEndpoint = import.meta.env.VITE_API_TOUR_ENDPOINT;

const http = axios.create({
    baseURL: tourApiURL,
})

export class TourService {
    getAllTours() {
        return http.get(`${tourApiURL}/${tourApiEndpoint}`);
    }
    getTourById(id) {
        return http.get(`${tourApiURL}/${tourApiEndpoint}/${id}`);
    }
}