import axios from 'axios';
import { API_BASE_URL } from '../config/config';

// Create axios instance with default config
const api = axios.create({
    baseURL: API_BASE_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const fetchBooks = async (filters = {}, page = 1) => {
    try {
        const response = await api.get('/books/', { params: { ...filters, page } });
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const fetchBook = async (id: number) => {
    try {
        const response = await api.get(`/books/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book:', error);
        throw error;
    }
};