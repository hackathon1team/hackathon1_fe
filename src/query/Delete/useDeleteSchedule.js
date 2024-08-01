import { useMutation, useQueryClient } from '@tanstack/react-query';
import ScheduleApi from '../../apis/ScheduleApi';

export const useDeleteSchedule = (setIsDetailModal, refetch) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (recordId) => {
            return ScheduleApi.deleteSchedule(recordId);
        },
        onSuccess: (res) => {
            setIsDetailModal({
                isView: false,
                data: {},
            });
            refetch();
        },
    });
};
