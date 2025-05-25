import {http} from '@/shared/services/http-common.js'

const tourApiURL =  import.meta.env.VITE_BIKES_API_BASE_URL;

/**
 * @class TourApiService
 * @description Service class for handling CRUD operations on Touring using HTTP requests
 */

export class TourApiService {
    /**
     * Retrieves all the Tours
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getAllTours() {
        return http.get(`${tourApiURL}/tours`);
    }
    /**
     * Retrieves a tour by its id
     * @param {int} id - The email of the user to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getTourById(id) {
        return http.get(`${tourApiURL}/tours?id=${id}`);
    }
}