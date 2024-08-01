import { useMutation } from '@tanstack/react-query';
import UserApi from '../../apis/UserApi';
import TokenService from '../../utils/tokenService';
import UserNickNameService from '../../utils/userNickNameService';

export const useDeleteAccount = (navigate) => {
    return useMutation({
        mutationFn: () => {
            return UserApi.deleteAccount();
        },
        onSuccess: (res) => {
            TokenService.removeAccessToken();
            UserNickNameService.removeNickName();
            navigate('/');
        },
    });
};
