export class TouringEntity {
    constructor(
        id = 0,
        name = "",
        hour = "",
        img = "",
        price = 0.0,
    ) {
        this.id = id;
        this.name = name;
        this.hour = hour;
        this.img = img;
        this.price = price;
    }
}