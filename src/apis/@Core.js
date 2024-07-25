import axios from 'axios';
import TokenService from '../utils/tokenService';

//axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const access_token = TokenService.getAccessToken();
        if (access_token === null) return config;
        if (access_token) {
            config.headers['Authorization'] = `Bearer ${access_token}`;
        }
        return config;
    },

    (error) => {
        return Promise.reject(error);
    },
);
axiosInstance.interceptors.response.use((response) => {
    console.log(response);
    return response;
});

export default axiosInstance;
