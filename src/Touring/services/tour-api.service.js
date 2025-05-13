import http from '@/shared/services/http-common.js'

const tourApiURL =  import.meta.env.VITE_API_BASE_URL;
const tourApiEndpoint = import.meta.env.VITE_API_TOUR_ENDPOINT;


export class TourApiService {
    getAllTours() {
        return http.get(`${tourApiURL}/${tourApiEndpoint}`);
    }
    getTourById(id) {
        return http.get(`${tourApiURL}/${tourApiEndpoint}/${id}`);
    }
}