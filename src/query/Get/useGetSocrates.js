import { useQuery } from '@tanstack/react-query';
import ScheduleApi from '../../apis/ScheduleApi';

const getSocrates = async () => {
    const res = await ScheduleApi.getSocrates();
    return res.data.answers;
};

const useGetSocrates = () =>
    useQuery({
        queryKey: ['useGetSocrates'],
        queryFn: () => getSocrates(),
    });

export default useGetSocrates;
