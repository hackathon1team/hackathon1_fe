import styled from 'styled-components';
import { PlusIcon } from '../../../components/icons/icons';
import { CalendarIcon } from '../../../components/icons/icons';

const NoneTimeCalendarPage = () => {
    return (
        <>
            <Title>
                오늘도 하루가 끝났네요. <br />
                7월 12일의 하루를 <br />
                기록해 볼까요?
            </Title>

            <NoneTimeCalendar>
                <NotYet>아직 작성한 가계부가 없네요.</NotYet>
                <AnotherDayButton>다른 날 데이터 보러가기</AnotherDayButton>
                <img
                    src="src\assets\Img\timeCalendarImg\timeCalendar알약캐릭터.png"
                    alt="timeCalendarImg"
                />
            </NoneTimeCalendar>
            <PlusIcon />
            <CalendarIcon />
        </>
    );
};

export default NoneTimeCalendarPage;

const Title = styled.div`
    font-size: 21px;
    font-weight: 700;
    color: #ffffff;
    text-align: left;
`;

const NoneTimeCalendar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 40%;

    img {
        padding-top: 3%;
    }
`;

const NotYet = styled.div`
    font-size: 21px;
    font-weight: 700;
    color: #d3cbcb;
    margin-bottom: 3%;
`;

const AnotherDayButton = styled.button`
    background-color: #ddd9d951;
    color: #d9aeae;
    font-size: 15px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    padding: 8px 10px;
`;
