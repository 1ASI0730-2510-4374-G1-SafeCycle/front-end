import http from "@/shared/services/http-common.js"

export class UserService {
    resourceEndpoint = "/users";

    getByEmail(email) {
        return http.get(`${this.resourceEndpoint}?email=${email}`);
    }

    create(userData) {
        return http.post(this.resourceEndpoint, userData);
    }
}