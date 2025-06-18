import axios from 'axios';
import { USER_API_END_POINT, JOB_API_END_POINT, APPLICATION_API_END_POINT, COMPANY_API_END_POINT, SAVED_JOBS_API_END_POINT } from './constant';

// Create axios instance with default config
const createApi = (baseURL) => {
    const instance = axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    // Add request interceptor
    instance.interceptors.request.use(
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
    instance.interceptors.response.use(
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

    return instance;
};

// Export API endpoints
export const userApi = createApi(USER_API_END_POINT);
export const jobApi = createApi(JOB_API_END_POINT);
export const applicationApi = createApi(APPLICATION_API_END_POINT);
export const companyApi = createApi(COMPANY_API_END_POINT);
export const savedJobsApi = createApi(SAVED_JOBS_API_END_POINT);

export default createApi; 