import {TouringEntity} from "@/Touring/model/touringEntity.js";

export class TouringAssembler {
    static ToursFromResponse(response){
        const toursData = response.data;
        return toursData.map((tour) => this.TourFromResponse(tour));

    }
    static TourFromResponse(tour){
        console.log(tour);
        return new TouringEntity(tour.name, tour.hour, tour.img, tour.price);
    }
}