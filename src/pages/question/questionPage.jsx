import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import { BackGroundImg } from '../../styles/common';
import NoneCalendarPage from './components/NoneCalendarPage';
import SelectDate from './components/selectDate';

function QuestionPage() {
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
    ];
    return (
        <>
            <BackImg>
                {testData.length === 0 ? <NoneCalendarPage /> : <SelectDate />}
            </BackImg>
        </>
    );
}
export default QuestionPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;
