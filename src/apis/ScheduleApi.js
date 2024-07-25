import axiosInstance from './@Core';

const ScheduleApi = {
    getSchedule(date) {
        return axiosInstance.get(`api/v1/time-ledger/records/date/${date}`);
    },
};

export default ScheduleApi;
