import axios from "axios";

const unsplashAPI = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TU_ACCESS_KEY',
    },
    params: {
        per_page: 1,
        orientation: 'landscape',
    },
});

export class CityApiService {

}
