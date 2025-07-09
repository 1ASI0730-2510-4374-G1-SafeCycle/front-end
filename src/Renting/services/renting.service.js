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

    paymentEndpoint = "/Payment";

    paymentInformationEndpoint = "/PaymentInformation";
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

    removeRent(userId) {
        return http.post(`${this.rentsEndpoint}/delete`,userId);
    }
    createRent(rentData){

        const data = {
            startTime: now,
            endTime: getDatePlusMinutes(parseInt(rentData.minutes)),
            paymentId: rentData.paymentId,
            userId: rentData.userId,
            bikeStationId: rentData.bikeStationId
        };

        return http.post(this.rentsEndpoint, data);
    }

    async createPaymentMethod(cardData){
        return await http.post(this.paymentInformationEndpoint,cardData);
    }
    async createPayment(paymentData){
        return await http.post(this.paymentEndpoint, paymentData);
    }
    async getCurrentRental(id) {
        return await http.get(`${this.rentsEndpoint}/user/${id}`);
    }

    async getBikeStationById(id) {
        return await http.get(`${this.bikeStationsEndpoint}/${id}`);
    }
}