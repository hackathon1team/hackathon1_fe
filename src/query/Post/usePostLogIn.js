import { useMutation } from '@tanstack/react-query';
import UserApi from '../../apis/UserApi';
import TokenService from '../../utils/tokenService';

export const usePostLogIn = (navigate) => {
    return useMutation({
        mutationFn: (idAndPw) => {
            return UserApi.postLogIn(idAndPw);
        },
        onSuccess: (res) => {
            TokenService.setAccessToken(res.data.accessToken);
            navigate('/');
        },
    });
};
