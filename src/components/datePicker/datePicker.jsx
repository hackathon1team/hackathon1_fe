import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import './datePickerStyld.css';
import { useNavigate } from 'react-router-dom';
import { useDateToNumber } from '../../hooks/useDateToNumber';
import moment from 'moment';

function ReactCalendar({ url, modalCloseFn }) {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        let date = '';
        if (selectedDate) {
            let dateSplit = String(selectedDate).split(' ');
            date = dateSplit[3] + '-' + dateSplit[1] + '-' + dateSplit[2];
            const totalDate = useDateToNumber(date);
            navigate(`${url}${totalDate}`);
            modalCloseFn && modalCloseFn();
        }
    }, [selectedDate]);
    const today = new Date();

    return (
        <Wrapper>
            <GoToday onClick={() => setSelectedDate(today)}>오늘로</GoToday>
            <WrapperIcon onClick={modalCloseFn}>닫기</WrapperIcon>
            <Calendar
                locale="kor"
                onChange={setSelectedDate} // useState로 포커스 변경 시 현재 날짜 받아오기
                formatMonthYear={(locale, date) =>
                    moment(date).format('YYYY. MM')
                }
                next2Label={null} //이동 버튼 숨기기
                prev2Label={null} //이동 버튼 숨기기
                showNeighboringMonth={false} // (전 & 다음달) 날짜 숨기기
                value={selectedDate}
                tileContent={({ date, view }) => {
                    let html = [];
                    if (
                        view === 'month' &&
                        date.getMonth() === today.getMonth() &&
                        date.getDate() === today.getDate()
                    ) {
                        html.push(<Today key={'today'}>오늘</Today>);
                    }
                    return <>{html}</>;
                }}
                //오늘 넣어주기
                formatDay={(locale, date) => moment(date).format('DD')}
                calendarType="gregory" //일요일 시작
            />
        </Wrapper>
    );
}
export default ReactCalendar;
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 150px;
`;
const GoToday = styled.div`
    position: absolute;
    left: 20px;
    top: 10px;
    background-color: #dcb5e3;
    padding: 5px;
    font-size: 12px;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
    color: #000000a6;
    font-weight: bold;
`;
const WrapperIcon = styled.div`
    position: absolute;
    right: 20px;
    top: 10px;
    background-color: #d5cfd5;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 10px;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
    color: #000000a6;
    font-weight: bold;
`;
const Today = styled.div`
    color: black;
`;
