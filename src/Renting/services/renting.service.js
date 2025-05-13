import http from "@/shared/services/http-common.js"

export class BikeService {
    bikeStationsEndpoint = "/bikeStations";
    bikes = "/bikes";

    getAvailableBikesByStationId(stationId) {
        return http.get(`${this.bikes}?idStation=${stationId}&available=true`);
    }

    getBikeStations() {
        return http.get(`${this.bikeStationsEndpoint}`);
    }
}