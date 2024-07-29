import axios from 'axios';
import TokenService from '../utils/tokenService';
import UserApi from './UserApi';

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

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },

    async (error) => {
        console.log(error);
        if (error.message === 'Network Error') {
            return Promise.reject(error);
        }

        const originalRequest = error.config;

        if (error.response.status === 415) {
            //refrest 만료시 로그아웃 및  /logInPage로 Reouter
            TokenService.removeAccessToken();
            // window.location.href = '/logIn';
            return Promise.reject(error);
        }

        // AccessToken 재발급
        if (error.response.status === 401) {
            originalRequest._retry = true;
            TokenService.setAccessToken('');
            const res = await UserApi.getToken();
            if (res.status === 200) {
                TokenService.setAccessToken(res?.data?.response?.accessToken);
                return axiosInstance(originalRequest);
            } else {
                return axiosInstance(originalRequest);
            }
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;
