import { useQuery } from '@tanstack/react-query';
import UserApi from '../../apis/UserApi';

const getToken = async () => {
    const res = await UserApi.getToken();
    return res.data;
};

const useGetToken = () =>
    useQuery({
        queryKey: ['useGetToken'],
        queryFn: () => getToken(),
    });

export default useGetToken;
