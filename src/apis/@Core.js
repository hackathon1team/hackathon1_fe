import axios from 'axios';
import TokenService from '../utils/tokenService';
import UserApi from './UserApi';
import UserNickNameService from '../utils/userNickNameService';

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
        console.log(response);

        return response;
    },

    async (error) => {
        console.log(error);

        if (error.message === 'Network Error') {
            return Promise.reject(error);
        }

        const originalRequest = error.config;

        if (error.response.status === 415) {
            //refrest 만료시 로그아웃 및  /logInPage로 Router
            TokenService.removeAccessToken();
            UserNickNameService.removeNickName();
            // window.location.href = '/logIn';
            return Promise.reject(error);
        }

        console.log(error);

        // AccessToken 재발급
        if (error.response.message === 'token is invalid') {
            console.log(error.response.message);
            originalRequest._retry = true;
            TokenService.setAccessToken('');
            const res = await UserApi.getToken();
            console.log(res);
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
