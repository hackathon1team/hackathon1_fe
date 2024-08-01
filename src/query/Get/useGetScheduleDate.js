import { useQuery } from '@tanstack/react-query';
import ScheduleApi from '../../apis/ScheduleApi';

const getScheduleDate = async (date) => {
    const res = await ScheduleApi.getSchedule(date);
    return res.data;
};

const useGetScheduleDate = (date) =>
    useQuery({
        queryKey: ['useGetScheduleDate'],
        queryFn: () => getScheduleDate(date),
    });

export default useGetScheduleDate;
