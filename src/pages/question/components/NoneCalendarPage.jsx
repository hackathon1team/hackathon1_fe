import styled from 'styled-components';

const NoneCalendarPage = () => {
    return (
        <>
            <Title>
                <span>시간 가계부</span>를 작성하지 않으면 <br />
                메코가 질문을 할 수 없어요...
            </Title>
            <GotoWrapper>
                <GotoTimeCalendar>
                    먼저 시간가계부를 작성하러 갈까요?
                    <CButtonWrapper>
                        <TimeCalendarButton>
                            시간 가계부 가기
                        </TimeCalendarButton>
                    </CButtonWrapper>
                    <ImgWrapper>
                        <img
                            src="src\assets\Img\questionImg\알약캐릭터.png"
                            alt="questionImg"
                        />
                    </ImgWrapper>
                </GotoTimeCalendar>
            </GotoWrapper>
        </>
    );
};

export default NoneCalendarPage;

const Title = styled.div`
    padding-top: 40%;
    color: white;
    font-size: 18px;

    span {
        font-weight: 700;
    }
`;

const GotoWrapper = styled.div`
    display: flex;
    justify-content: end;
`;

const GotoTimeCalendar = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #5a639c;
    text-align: center;
    padding-top: 7%;
    margin-top: 50%;
    width: 280px;
    height: 100px;
    border: none;
    border-radius: 30px;
    background-color: white;
`;
const CButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 3%;
    margin-top: 3%;
`;

const TimeCalendarButton = styled.button`
    font-size: 12px;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    padding: 8px 12px;
    color: #5a639c;
    background-color: rgba(155, 134, 189, 0.41);
`;
const ImgWrapper = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: end;
`;
