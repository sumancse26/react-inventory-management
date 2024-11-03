import axios from 'axios';
import Cookies from 'js-cookie';

const createAxiosInstance = () => {
    const config = {
        baseURL: import.meta.env.VITE_API_BASE_URL, // Use your environment variable for the base URL
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const axiosInstance = axios.create(config);

    const onRequestHandler = (config) => {
        const token = Cookies.get('token');

        if (token) {
            config.headers['Authorization'] = token;
        } else {
            delete config.headers['Authorization'];
        }
        return config;
    };

    const onResponseHandler = (response) => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    };

    const onErrorHandler = (error) => {
        const status = error.response?.status || 500;

        if (!error.config?.url?.endsWith('login') && status === 401) {
            Cookies.remove('token');
        }

        const messages = {
            400: 'Bad request',
            401: 'Unauthorized request',
            403: 'Access forbidden',
            404: 'URL not exists',
            500: 'Internal server error',
            502: 'Bad gateway'
        };

        console.error(`[${messages[status]}]: `, error.message);
        return Promise.reject(error.response || error.message);
    };

    axiosInstance.interceptors.request.use(onRequestHandler, onErrorHandler);
    axiosInstance.interceptors.response.use(onResponseHandler, onErrorHandler);

    return axiosInstance;
};

const $axios = createAxiosInstance();

export default $axios;
