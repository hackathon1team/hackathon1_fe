import MecoQuestionApi from '../../apis/MecoQuestionApi';
import { useMutation } from '@tanstack/react-query';

export const usePostMecoQuestion = () => {
    return useMutation({
        mutationFn: (data) => {
            return MecoQuestionApi.postMecoQuestion(data);
        },
        onSuccess: () => {},
    });
};
