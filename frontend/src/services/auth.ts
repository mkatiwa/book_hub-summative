import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    email: string;
}

export const login = async (credentials: LoginCredentials) => {
    const response = await axios.post(`${API_URL}/token/`, credentials);
    const { access, refresh } = response.data;
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    return response.data;
};

export const register = async (credentials: RegisterCredentials) => {
    const response = await axios.post(`${API_URL}/register/`, credentials);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('accessToken');
};