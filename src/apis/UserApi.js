import axiosInstance from './@Core';

const UserApi = {
    postSignUp(userData) {
        return axiosInstance.post('/api/v1/signUp', userData);
    },
    postLogIn(idAndPw) {
        return axiosInstance.post('/api/v1/login', idAndPw);
    },
    patchMetaQuestion(data) {
        return axiosInstance.patch('/api/v1/meta-questions', data);
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
