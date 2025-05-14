/**
 * Represents a student in the application.
 */
export class Student {
    constructor({
                    id = 0,
                    username = '',
                    email = '',
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
        this.password = password;
        this.paymentInformation = paymentInformation;
    }
}