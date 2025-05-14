/**
 * Represents a Tourist in the application.
 */
export class Tourist {
    constructor({
                    id = 0,
                    username = '',
                    email = '',
                    passport = '',
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
        this.passport = passport;
        this.password = password;
        this.paymentInformation = paymentInformation;
    }
}