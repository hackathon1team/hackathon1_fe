import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import { BackGroundImg } from '../../styles/common';
import NoneCalendarPage from './components/NoneCalendarPage';
import SelectDate from './components/selectDate';
import useGetScheduleContents from '../../query/Get/useGetScheduleContents';

function QuestionPage() {
    const { data: getContents } = useGetScheduleContents();

    return (
        <>
            <BackImg>
                {getContents.length === 0 ? (
                    <NoneCalendarPage />
                ) : (
                    <SelectDate getContents={getContents} />
                )}
            </BackImg>
        </>
    );
}
export default QuestionPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;
