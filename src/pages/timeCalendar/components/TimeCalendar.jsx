import styled from 'styled-components';
import { PlusIcon } from '../../../components/icons/icons';
import { CalendarIcon } from '../../../components/icons/icons';

const TimeCalendarPage = () => {
    return (
        <>
            <Title>
                오늘도 하루가 끝났네요. <br />
                7월 12일의 하루를 <br />
                기록해 볼까요?
            </Title>
            <PlusIcon />
            <CalendarIcon />
        </>
    );
};

export default TimeCalendarPage;

const Title = styled.div`
    font-size: 21px;
    font-weight: 700;
    color: #ffffff;
    text-align: left;
`;
