import axios from 'axios';
import { USER_API_END_POINT, JOB_API_END_POINT, APPLICATION_API_END_POINT, COMPANY_API_END_POINT, SAVED_JOBS_API_END_POINT } from './constant';

// Create axios instance with default config
const api = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// Add request interceptor
api.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Clear auth state and redirect to login
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Export API endpoints
export const userApi = {
    baseURL: USER_API_END_POINT,
    ...api
};

export const jobApi = {
    baseURL: JOB_API_END_POINT,
    ...api
};

export const applicationApi = {
    baseURL: APPLICATION_API_END_POINT,
    ...api
};

export const companyApi = {
    baseURL: COMPANY_API_END_POINT,
    ...api
};

export const savedJobsApi = {
    baseURL: SAVED_JOBS_API_END_POINT,
    ...api
};

export default api; 