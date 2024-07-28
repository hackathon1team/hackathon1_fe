import axiosInstance from './@Core';

const ScheduleApi = {
    getSchedule(date) {
        return axiosInstance.get(`api/v1/time-ledger/records/date/${date}`);
    },
    getStatistics() {
        return axiosInstance.get(`api/v1/time-ledger/statistics`);
    },
    postSchedule(data) {
        return axiosInstance.post('api/v1/time-ledger/record', data);
    },
};

export default ScheduleApi;
