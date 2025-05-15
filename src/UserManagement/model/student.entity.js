/**
 * Represents a student in the application.
 */
export class Student {
    constructor({
                    id = 0,
                    username = '',
                    type = 'student',
                    email = '',
                    password = '',
                    maxDailyReservationHours =0,
                    paymentInformation = {
                        cardNumber: '',
                        type: '',
                        holder: ''
                    }
                }){
        this.id = id;
        this.username = username;
        this.email = email;
        this.type = "student";
        this.password = password;
        this.maxDailyReservationHours = maxDailyReservationHours;
        this.paymentInformation = paymentInformation;

    }
}