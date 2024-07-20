import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import NoneTimeCalendarPage from './components/NoneTimeCalendarPage';
import TimeCalendar from './components/TimeCalendar';

function TimeCalendarPage() {
    return (
        <>
            <BackImg>
                <NoneTimeCalendarPage />
            </BackImg>
            <BackImg>
                <TimeCalendar />
            </BackImg>
        </>
    );
}
export default TimeCalendarPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
`;
