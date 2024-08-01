import axiosInstance from './@Core';

const MecoQuestionApi = {
    postMecoQuestion(data) {
        return axiosInstance.post('api/v1/meco/questions', data);
    },
    getMecoQuestion(date) {
        return axiosInstance.get(`api/v1/meco/questions/${date}`);
    },
};

export default MecoQuestionApi;
