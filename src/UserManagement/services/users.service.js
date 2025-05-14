import http from "@/shared/services/http-common.js"
/**
 * @class UserService
 * @description Service class for handling CRUD operations on users using HTTP requests
 */
export class UserService {
    /** @type {string} The API endpoint for users */
    resourceEndpoint = "/users";

    /**
     * Retrieves a user by its email
     * @param {string} email - The email of the user to retrieve if it exists
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getByEmail(email) {
        console.log(`${this.resourceEndpoint}?email=${email}`);
        return http.get(`${this.resourceEndpoint}?email=${email}`);
    }
    /**
     * Retrieves a user by its email and password
     * @param {string} email - The email of the user to retrieve
     * @param {string} password - The password of the user to retrieve
     * @returns {Promise<AxiosResponse<any>>} Promise that resolves to the category object
     */
    getUserByEmailAndPassword(email, password) {
        return http.get(`${this.resourceEndpoint}?email=${email}&password=${password}`);
    }

    /**
     * Sends a POST request to create a new user.
     * @param {Object} userData - The user data object to be sent to the server.
     * @returns {Promise} A promise with the API response.
     */
    create(userData) {
        return http.post(this.resourceEndpoint, userData);
    }}