import styled from 'styled-components';
import meco from '../../../assets/Img//questionImg/happy.png';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/calendar&question.png';
import CustomButton from '../../../components/customButton/customButton';
import { useNavigate } from 'react-router-dom';

const QuestionSum = () => {
    const navigate = useNavigate();
    const Summary = {
        contents: '태기와 주먹다짐',
        questions: [
            '기분이 어땠나요?',
            '그 행동의 결과는 어땠나요?',
            '다음에는 어떻게 해결할 건가요?',
        ],
        answers: [
            '싸워서 마음이 아팠어요',
            '나의 주먹이 날라갔어요',
            '주먹보다 말로 풀려고 할 거에요',
        ],
    };
    const { questions, answers } = Summary;

    return (
        <BackImg>
            <QuestionSumImg>
                <img src={meco} alt="QuestionSumImg" />
            </QuestionSumImg>
            <QuestionAnswer>
                <Wrapper>
                    <Question>오늘의 인상깊은 사건은 무엇인가요?</Question>
                    <Answer>친구들과의 약속</Answer>
                </Wrapper>
                {questions.map((question, idx) => (
                    <Wrapper key={idx}>
                        <Question>{question}</Question>
                        <Answer>{answers[idx]}</Answer>
                    </Wrapper>
                ))}
            </QuestionAnswer>
            <BtnWrapper>
                <CustomButton
                    icon="right"
                    onClick={() => navigate('/question')}
                >
                    시간 가계부
                </CustomButton>
            </BtnWrapper>
        </BackImg>
    );
};

export default QuestionSum;
const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;
const QuestionSumImg = styled.div``;

const QuestionAnswer = styled.div`
    text-align: left;
    padding-top: 5%;
    color: #edececde;
    font-weight: 700;
`;
const Wrapper = styled.div`
    padding-bottom: 8%;
`;
const Question = styled.div`
    padding-bottom: 2%;
    font-size: 18px;
`;
const Answer = styled.div`
    font-size: 16px;
    border-radius: 10px;
    background-color: #0000002b;
    padding: 3%;
`;
const BtnWrapper = styled.div`
    display: flex;
    justify-content: end;
`;
