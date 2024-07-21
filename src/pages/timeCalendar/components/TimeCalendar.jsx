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
            <TimeCalendarContent>
                <Header>
                    <Emotion>감정</Emotion>
                    <Case>분류</Case>
                    <Content>내용</Content>
                    <Hour>시간</Hour>
                </Header>
                <AllContents>
                    <EmotionWrapper>
                        <EmotionEmoji>@</EmotionEmoji>
                        <EmotionContent>놀람</EmotionContent>
                    </EmotionWrapper>
                    <CaseContent>친구</CaseContent>
                    <ContentContent>모모퍼즐만들기</ContentContent>
                    <HourContent>3시간</HourContent>
                </AllContents>
                <FirstContent>@ 놀람 친구 모모퍼즐만들기 3시간</FirstContent>
            </TimeCalendarContent>
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
    margin-bottom: 10%;
`;

const TimeCalendarContent = styled.div`
    background-color: #ffffff55;
    border: none;
    border-radius: 40px;
    padding-left: 2%;
    padding-right: 2%;
    width: 100%;
    height: 300px; //이따 지워
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5% 5% 2% 5%;
    color: #f8f9fe;
    font-size: 16px;
    font-weight: 700;
`;
const Emotion = styled.div``;
const Case = styled.div``;
const Content = styled.div``;
const Hour = styled.div``;

const AllContents = styled.div`
    display: flex;
    justify-content: space-between;
    color: #f8f9fe;
    font-size: 16px;
    padding: 0 3%;
`;

const EmotionWrapper = styled.div`
    display: flex;
`;
const EmotionEmoji = styled.div``;

const EmotionContent = styled.div``;
const CaseContent = styled.div``;
const ContentContent = styled.div``;
const HourContent = styled.div``;

const FirstContent = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    color: #f8f9fe;
    font-size: 16px;
`;
