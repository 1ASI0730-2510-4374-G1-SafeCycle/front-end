/**
 * Represents a Tourist in the application.
 */
export class Tourist {
    constructor({
                    id = 0,
                    username = '',
                    email = '',
                    type = 'tourist',
                    passport = '',
                    maxDailyReservationHours = 0,
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
        this.maxDailyReservationHours = 12;
        this.type = 'tourist';
        this.passport = passport;
        this.password = password;
        this.paymentInformation = paymentInformation;
    }
}