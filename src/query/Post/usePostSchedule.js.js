import { useMutation } from '@tanstack/react-query';
import ScheduleApi from '../../apis/ScheduleApi';

export const usePostSchedule = (setIsView, refetch) => {
    return useMutation({
        mutationFn: (data) => {
            return ScheduleApi.postSchedule(data);
        },
        onSuccess: (res) => {
            console.log(res);
            setIsView(() => ({
                firstModal: false,
                emotionModal: false,
                categoryModal: false,
            }));
            refetch();
        },
    });
};
