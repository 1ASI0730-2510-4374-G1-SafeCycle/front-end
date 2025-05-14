/**
 * Represents a student in the application.
 */
export class Student {
    constructor({
                    id = 0,
                    username = '',
                    educationalEmail = '',
                    password = '',
                    paymentInformation = {
                        cardNumber: '',
                        type: '',
                        holder: ''
                    }
                }){
        this.id = id;
        this.username = username;
        this.educationalEmail = educationalEmail;
        this.password = password;
        this.paymentInformation = paymentInformation;
    }
}