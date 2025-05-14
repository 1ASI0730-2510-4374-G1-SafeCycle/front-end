/**
 * Represents a Booked Tour on the application
 */
export class TourBookEntity{
    constructor(
        id=0,
        name="",
        start_date="",
        start_hour="",
        bike_station="",
        duration="",
        cost=""
    ){
        this.id = id;
        this.name = name;
        this.start_date = start_date;
        this.start_hour = start_hour;
        this.bike_station = bike_station;
        this.duration = duration;
        this.cost = cost;
    }
}