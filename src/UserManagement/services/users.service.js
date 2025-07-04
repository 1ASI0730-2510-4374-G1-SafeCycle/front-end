import {http} from "@/shared/services/http-common.js"
/**
 * @class UserService
 * @description Service class for handling CRUD operations on users using HTTP requests
 */
export class UserService {
    /** @type {string} The API endpoint for users */
    userResourceEndpoint = "/User";
    AuthResourceEndpoint = "/Authorization"

    /**
     * Sends a POST request to create a new user.
     * @param {Object} userData - The user data object to be sent to the server.
     * @returns {Promise} A promise with the API response.
     */
    create(userData) {
        return http.post(this.AuthResourceEndpoint+"/sign-up", userData);
    }

    signIn(userData) {
        return http.post(this.AuthResourceEndpoint+"/sign-in", userData);
    }}