import styled from 'styled-components';

const QuestionSum = () => {
    return (
        <QuestionSum>
            <QuestionSumImg>
                <img
                    src="src\assets\Img\questionImg\QuestionSumImg.png"
                    alt="QuestionSumImg"
                />
            </QuestionSumImg>
            <QuestionAnswerWrapper1>
                <Question1>오늘의 인상깊은 사건은 무엇인가요?</Question1>
                <Answer1>
                    1오늘의 인상깊은 사건은 햄버거를 먹은 것입니다. 햄버거가
                    너무 맛있어서 행복했어요
                </Answer1>
            </QuestionAnswerWrapper1>
            <QuestionAnswerWrapper2>
                <Question2>
                    이 사건에서 느낀 감정은 무엇이고 원인은 무엇인가요?
                </Question2>
                <Answer2>2</Answer2>
            </QuestionAnswerWrapper2>
            <QuestionAnswerWrapper3>
                <Question3>
                    이 감정이 내 행동에 어떻게 영향을 미치고 있나요?
                </Question3>
                <Answer3>3</Answer3>
            </QuestionAnswerWrapper3>
            <QuestionAnswerWrapper4>
                <Question4>
                    앞으로 비슷한 상황이 발생했을 때, 어떻게 대처하면 좋을까요?
                </Question4>
                <Answer4>4</Answer4>
            </QuestionAnswerWrapper4>
        </QuestionSum>
    );
};

export default QuestionSum;

const QuestionSumImg = styled.div`
    display: flex;
    justify-content: center;
`;

const QuestionAnswerWrapper1 = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    color: #edececdf;
    display: flex;
    flex-direction: column;
`;

const Question1 = styled.div``;
const Answer1 = styled.div`
    width: 100%;
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
`;

const QuestionAnswerWrapper2 = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: 700;
    color: #edececdf;
    display: flex;
    flex-direction: column;
`;

const Question2 = styled.div``;
const Answer2 = styled.div`
    width: 100%;
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
`;

const QuestionAnswerWrapper3 = styled.div`
    text-align: left;
    padding-top: 5%;
    font-size: 18px;
    font-weight: 700;
    color: #edececdf;
    display: flex;
    flex-direction: column;
`;

const Question3 = styled.div``;
const Answer3 = styled.div`
    width: 100%;
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
`;

const QuestionAnswerWrapper4 = styled.div`
    text-align: left;
    padding-top: 5%;
    font-size: 18px;
    font-weight: 700;
    color: #edececdf;
    display: flex;
    flex-direction: column;
`;
const Question4 = styled.div``;
const Answer4 = styled.div`
    width: 100%;
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
`;
