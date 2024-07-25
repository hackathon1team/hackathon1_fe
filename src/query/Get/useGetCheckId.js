import { useQuery } from '@tanstack/react-query';
import UserApi from '../../apis/UserApi';

const getCheckIdData = async (userId) => {
    try {
        const res = await UserApi.getCheckId(userId);
        return res.data;
    } catch (err) {}
};

export default getCheckIdData;
