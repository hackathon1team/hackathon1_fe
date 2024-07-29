import axiosInstance from './@Core';

const MecoQuestionApi = {
    postMecoQuestion(data) {
        return axiosInstance.post('api/v1/meco/questions', data);
    },
};

export default MecoQuestionApi;
