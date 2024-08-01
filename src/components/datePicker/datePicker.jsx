import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import './datePickerStyld.css';
import { useNavigate } from 'react-router-dom';
import { useDateToNumber } from '../../hooks/useDateToNumber';

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
            <Calendar
                locale="en"
                onChange={setSelectedDate} // useState로 포커스 변경 시 현재 날짜 받아오기
                value={selectedDate}
                // minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                // maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                navigationLabel={null}
                showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
                className="mx-auto w-full text-sm border-b"
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
            />
        </Wrapper>
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
const Today = styled.div`
    color: purple;
`;
