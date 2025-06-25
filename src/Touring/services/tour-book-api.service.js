import {http} from '@/shared/services/http-common.js'



export class TourBookApiService{
    /**
     * Retrieves all the Tour Booked
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getAllTourBooks(){
        return http.get(`/TourBooking`);
    }
    /**
     * Retrieves a tour booked by its id
     * @param {int} id - The email of the user to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getTourBook(id){
        return http.get(`TourBooking/${id}`);
    }
}
