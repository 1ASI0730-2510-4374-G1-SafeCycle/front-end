import {http} from '@/shared/services/http-common.js'


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
        return http.get(`/Tour`);
    }
    /**
     * Retrieves a tour by its id
     * @param {int} id - The email of the user to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getTourById(id) {
        return http.get(`/Tour/${id}`);
    }
}