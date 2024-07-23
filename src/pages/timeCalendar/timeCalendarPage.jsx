import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import NoneTimeCalendarPage from './components/NoneTimeCalendarPage';
import TimeCalendar from './components/TimeCalendar';
import { CalendarIcon, PlusIcon } from '../../components/icons/icons';
import ScheduleModal from './components/scheduleModal';
import { useState } from 'react';

function TimeCalendarPage() {
    const testData = [
        {
            recordId: '2',
            emotion: '짜증',
            category: '친구',
            contents: '태기랑 주먹다짐했다.',
            takedTime: '2',
        },
        {
            recordId: '3',
            emotion: '기쁨',
            category: '친구',
            contents: '태기랑 화해했다.',
            takedTime: '1',
        },
        {
            recordId: '3',
            emotion: '기쁨',
            category: '친구',
            contents: '태기랑 밥먹었다.',
            takedTime: '11',
        },
        {
            recordId: '3',
            emotion: '기쁨',
            category: '친구',
            contents: '태기랑 놀았다.',
            takedTime: '1',
        },
    ];
    const [isView, setIsView] = useState({
        firstModal: false,
        emotionModal: false,
        categoryModal: false,
    });
    return (
        <>
            <BackImg>
                <Title>
                    오늘도 하루가 끝났네요. <br />
                    7월 12일의 하루를 <br />
                    기록해 볼까요?
                </Title>
                {testData.length === 0 ? (
                    <NoneTimeCalendarPage />
                ) : (
                    <TimeCalendar testData={testData} />
                )}
                <FixedIcon>
                    <PlusIcon
                        onClick={() =>
                            setIsView((prev) => ({ ...prev, firstModal: true }))
                        }
                    />
                    <Circle>
                        <CalendarIcon />
                    </Circle>
                </FixedIcon>
                {isView.firstModal && (
                    <ScheduleModal setIsView={setIsView} isView={isView} />
                )}
            </BackImg>
        </>
    );
}
export default TimeCalendarPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}/* position: relative; */
`;
const Title = styled.div`
    font-size: 21px;
    font-weight: 700;
    color: #f8f9fe;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10%;
`;
const FixedIcon = styled.div`
    /* background-color: red; */
    width: 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 5%;
    right: 10%;
`;
const Circle = styled.div`
    border: 4px solid #ffe9e9;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;
