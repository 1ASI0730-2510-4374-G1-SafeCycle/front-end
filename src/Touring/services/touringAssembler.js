import {TouringEntity} from "@/Touring/model/touringEntity.js";
/**
 * Represents a Assembler Tour  on the application
 */
export class TouringAssembler {
    static ToursFromResponse(response){
        const toursData = response.data;
        return toursData.map((tour) => this.TourFromResponse(tour));

    }
    static TourFromResponse(tour){
        console.log(tour);
        return new TouringEntity(tour.id,tour.name, tour.hour, tour.img, tour.price);
    }
}