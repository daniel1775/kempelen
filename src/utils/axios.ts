import axios from 'axios';

export const BASE_URL =
    process.env.EXPO_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api/';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export const api = axiosInstance;
