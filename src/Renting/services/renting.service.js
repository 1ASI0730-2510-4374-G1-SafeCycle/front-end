import { http } from "@/shared/services/http-common.js";
import {getDatePlusMinutes} from "@/shared/services/time.service.js";
import {now} from "@/shared/services/time.service.js";

/**
 * @class BikeService
 * @description Service class for handling CRUD operations on bikes and bike stations using HTTP requests
 */

export class BikeService {
    /** @type {string} The API endpoint for bike stations */
    bikeStationsEndpoint = "/BikeStation";
    /** @type {string} The API endpoint for bikes */
    rentsEndpoint = "/Rent";

    /**
     * Retrieves all available bikes from a specific station id
     * * @param {number} id - The ID of the station to access
     * * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     * */
    getAvailableBikesByStationId(stationId) {
        return http.get(`/Bikes/available/${stationId}`);
    }

    /**
     * Retrieves all bike stations
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of bike stations
     */
    getBikeStations() {
        return http.get(`${this.bikeStationsEndpoint}`);
    }

    create(rentData){
        var starTime = now;
        var endTime =  getDatePlusMinutes(rentData.minutes);

        return http.post(this.rentsEndpoint, rentData);
    }
}