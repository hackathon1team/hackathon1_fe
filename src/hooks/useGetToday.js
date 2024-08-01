export const useGetToday = () => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜
    return (
        year +
        '-' +
        (month < 10 ? '0' + month : month) +
        '-' +
        (date < 10 ? '0' + date : date)
    );
};
