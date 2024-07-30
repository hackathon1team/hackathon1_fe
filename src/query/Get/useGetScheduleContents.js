import { useQuery } from '@tanstack/react-query';
import ScheduleApi from '../../apis/ScheduleApi';

const getScheduleContents = async () => {
    const res = await ScheduleApi.getScheduleContents();
    return res.data.contentsList;
};

const useGetScheduleContents = () =>
    useQuery({
        queryKey: ['useGetScheduleContents'],
        queryFn: () => getScheduleContents(),
    });

export default useGetScheduleContents;
