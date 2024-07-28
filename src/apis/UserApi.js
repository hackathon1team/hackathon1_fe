import axiosInstance from './@Core';

const UserApi = {
    postSignUp(userData) {
        return axiosInstance.post('/api/v1/signUp', userData);
    },
    postLogIn(idAndPw) {
        return axiosInstance.post('/api/v1/login', idAndPw);
    },
    getCheckId(userId) {
        return axiosInstance.get('api/v1/check-duplication', {
            params: { userId },
        });
    },
    getToken() {
        return axiosInstance.post('/api/v1/accessToken');
    },
};

export default UserApi;
