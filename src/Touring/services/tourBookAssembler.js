import {TourBookEntity} from "@/Touring/model/tourBookEntity.js";

export class TourBookAssembler {
    static EntityFromResponse(response){
        const tourBookRaw = response.data;
        return new TourBookEntity(tourBookRaw.id,
            tourBookRaw.name,
            tourBookRaw.start_date,
            tourBookRaw.start_hour,
            tourBookRaw.bike_station,
            tourBookRaw.duration,
            tourBookRaw.cost
        );
    }
}