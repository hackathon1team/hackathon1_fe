import axiosInstance from './@Core';

const ScheduleApi = {
    getSchedule(date) {
        return axiosInstance.get(`api/v1/time-ledger/records/date/${date}`);
    },
    getScheduleContents() {
        return axiosInstance.get('/api/v1/time-ledger/today-records');
    },
    getStatistics() {
        return axiosInstance.get(`api/v1/time-ledger/statistics`);
    },
    getSocrates() {
        return axiosInstance.get(`api/v1/meta-questions`);
    },
    postSchedule(data) {
        return axiosInstance.post('api/v1/time-ledger/record', data);
    },
};

export default ScheduleApi;
