import http from "@/shared/services/http-common.js"

/**
 * @class BikeService
 * @description Service class for handling CRUD operations on bikes and bike stations using HTTP requests
 */

export class BikeService {
    /** @type {string} The API endpoint for bike stations */
    bikeStationsEndpoint = "/bikeStations";
    /** @type {string} The API endpoint for bikes */
    bikes = "/bikes";


    /**
     * Retrieves all available bikes from a specific station Id
     * * @param {number} id - The ID of the station to access
     * * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     * */
    getAvailableBikesByStationId(stationId) {
        return http.get(`${this.bikes}?idStation=${stationId}&available=true`);
    }

    /**
     * Retrieves all bike stations
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to an array of bike stations
     */
    getBikeStations() {
        return http.get(`${this.bikeStationsEndpoint}`);
    }
}