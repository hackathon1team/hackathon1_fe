import { useQuery } from '@tanstack/react-query';
import ScheduleApi from '../../apis/ScheduleApi';

const getScheduleDate = async (date) => {
    const res = await ScheduleApi.getSchedule(date);
    console.log(res);
    return res.data;
};

const useGetScheduleDate = (date) => {
    const scheduleDateQuery = useQuery({
        queryKey: 'useGetScheduleDate',
        queryFn: () => getScheduleDate(date),
    });
    return scheduleDateQuery;
};

export default useGetScheduleDate;
