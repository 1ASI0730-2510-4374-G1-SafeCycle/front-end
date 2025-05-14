import {http} from '@/shared/services/http-common.js'

const apiURL = import.meta.env.VITE_API_BASE_URL
const tourBookApi = import.meta.env.VITE_API_TOUR_BOOKE_ENDPOINT

export class TourBookApiService{
    /**
     * Retrieves all the Tour Booked
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getAllTourBooks(){
        return http.get(`${apiURL}/${tourBookApi}`);
    }
    /**
     * Retrieves a tour booked by its id
     * @param {int} id - The email of the user to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getTourBook(id){
        return http.get(`${apiURL}/${tourBookApi}/${id}`);
    }
}
