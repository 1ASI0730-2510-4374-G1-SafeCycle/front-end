import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BIKES_API_URL = import.meta.env.VITE_BIKES_API_BASE_URL;

export const http = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export const httpBikes = axios.create({
    baseURL: BIKES_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});