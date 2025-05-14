import http from '@/shared/services/http-common.js'

const apiURL = import.meta.env.VITE_API_BASE_URL
const tourBookApi = import.meta.env.VITE_API_TOUR_BOOKE_ENDPOINT

export class TourBookApiService{
    getAllTourBooks(){
        return http.get(`${apiURL}/${tourBookApi}`);
    }
    getTourBook(id){
        return http.get(`${apiURL}/${tourBookApi}/${id}`);
    }
}
