import { useQuery } from '@tanstack/react-query';
import ScheduleApi from '../../apis/ScheduleApi';

const getStatisticDate = async () => {
    const res = await ScheduleApi.getStatistics();
    return res.data;
};

const useGetStatisticDate = () =>
    useQuery({
        queryKey: ['useGetStatisticDate'],
        queryFn: () => getStatisticDate(),
    });

export default useGetStatisticDate;
