import UserApi from '../../apis/UserApi';
import { useMutation } from '@tanstack/react-query';

export const usePostSignUp = (setIsModalView) => {
    return useMutation({
        mutationFn: (userData) => {
            return UserApi.postSignUp(userData);
        },
        onSuccess: () => {
            setIsModalView(true);
        },
    });
};
