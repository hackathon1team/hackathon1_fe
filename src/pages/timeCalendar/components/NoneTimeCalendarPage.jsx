import styled from 'styled-components';

const NoneTimeCalendarPage = () => {
    return (
        <>
            <NoneTimeCalendar>
                <NotYet>아직 작성한 가계부가 없네요.</NotYet>
                <AnotherDayButton
                    onClick={() => alert('서비스 개발중입니다 :)')}
                >
                    다른 날 데이터 보러가기
                </AnotherDayButton>
                <img
                    src="src\assets\Img\timeCalendarImg\timeCalendar알약캐릭터.png"
                    alt="timeCalendarImg"
                />
            </NoneTimeCalendar>
        </>
    );
};

export default NoneTimeCalendarPage;

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
    font-weight: 600;
    color: #d3cbcb;
    margin-bottom: 3%;
`;

const AnotherDayButton = styled.button`
    background-color: #ddd9d951;
    color: #d9aeae;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    padding: 8px 10px;
`;
