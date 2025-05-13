export class BookingEntity {
    constructor(
        date = null,
        starthour = "",
        endhour = "",
        bikestation = "") {
        this.date = date;
        this.starthour = starthour;
        this.endhour = endhour;
        this.bikestation = bikestation;
    }
}