import { useMutation } from '@tanstack/react-query';
import UserApi from '../../apis/UserApi';

export const usePatchMetaQuestion = (navigate) => {
    return useMutation({
        mutationFn: (data) => {
            return UserApi.patchMetaQuestion(data);
        },
        onSuccess: (res) => {
            navigate('/');
        },
    });
};
