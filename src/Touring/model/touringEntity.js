export class TouringEntity {
    constructor(
        name = "",
        hour = "",
        img = "",
        price = 0.0,
    ) {
        this.name = name;
        this.hour = hour;
        this.img = img;
        this.price = price;
    }
}