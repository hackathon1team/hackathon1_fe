import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import { BackGroundImg } from '../../styles/common';
import NoneCalendarPage from './components/NoneCalendarPage';
import CustomButton from '../../components/customButton/customButton';

function QuestionPage() {
    return (
        <>
            <BackImg>
                <NoneCalendarPage />
            </BackImg>
            <BackImg>
                1-1메코의 질문
                <CustomButton icon={'right'}>대화하러</CustomButton>
                <CustomButton icon={'right'}>이전 대화 보기</CustomButton>
            </BackImg>
            <BackImg>1-2메코의 질문</BackImg>
        </>
    );
}
export default QuestionPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;
