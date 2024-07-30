import { useMutation } from '@tanstack/react-query';
import UserApi from '../../apis/UserApi';
import TokenService from '../../utils/tokenService';
import UserNickNameService from '../../utils/userNickNameService';

export const usePostLogIn = (navigate) => {
    return useMutation({
        mutationFn: (idAndPw) => {
            return UserApi.postLogIn(idAndPw);
        },
        onSuccess: (res) => {
            TokenService.setAccessToken(res.data.accessToken);
            UserNickNameService.setNickName(
                res.data.userName === null ? '이름미정' : res.data.userName,
            );
            navigate('/');
        },
    });
};
