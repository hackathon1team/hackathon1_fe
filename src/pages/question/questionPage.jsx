import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import { BackGroundImg } from '../../styles/common';
import NoneCalendarPage from './components/NoneCalendarPage';
import QuestionSum from './components/QuestionSum';


function QuestionPage() {
    return (
        <>
            <BackImg>
                <NoneCalendarPage />
            </BackImg>
            <BackImg>메코의 질문 정리</BackImg>
            <BackImg>
                <QuestionSum />
            </BackImg>
        </>
    );
}
export default QuestionPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;
