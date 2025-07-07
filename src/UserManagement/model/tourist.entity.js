/**
 * Represents a Tourist in the application.
 */
export class Tourist {
    constructor({
                    id = 0,
                    username = '',
                    email = '',
                    typeUser = 'tourist',
                    identificationUser = '',
                    maxDailyReservationHour = "12:00:00",
                    password = '',
                    paymentInformation = {
                        cardNumber: '',
                        type: '',
                        holder: ''
                    }
                }){
        this.id = id;
        this.username = username;
        this.email = email;
        this.maxDailyReservationHour = "12:00:00";
        this.typeUser = 'tourist';
        this.identificationUser = identificationUser;
        this.password = password;
        this.paymentInformation = paymentInformation;
    }
}