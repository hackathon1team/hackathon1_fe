import styled from 'styled-components';

const QuestionSum = () => {
    return (
        <>
            <QuestionSumImg>
                <img
                    src="src\assets\Img\questionImg\QuestionSumImg.png"
                    alt="QuestionSumImg"
                />
            </QuestionSumImg>
            <QuestionAnswer>
                <Question1>오늘의 인상깊은 사건은 무엇인가요?</Question1>
                <Answer1>1gkst;asldifwevosdnv;lsad</Answer1>
                <Question2>
                    이 사건에서 느낀 감정은 무엇이고 원인은 무엇인가요?
                </Question2>
                <Answer2>2</Answer2>
                <Question3>
                    이 감정이 내 행동에 어떻게 영향을 미치고 있나요?
                </Question3>
                <Answer3>3</Answer3>
                <Question4>
                    앞으로 비슷한 상황이 발생했을 때, 어떻게 대처하면 좋을까요?
                </Question4>
                <Answer4>4</Answer4>
            </QuestionAnswer>
        </>
    );
};

export default QuestionSum;

const QuestionSumImg = styled.div`
    display: flex;
    justify-content: center;
`;

const QuestionAnswer = styled.div`
    text-align: left;
    padding-top: 5%;
    font-size: 18px;
    font-weight: 700;
    color: #edececdf;
`;

const Question1 = styled.div``;

const Question2 = styled.div``;

const Question3 = styled.div``;

const Question4 = styled.div``;

const Answer1 = styled.div`
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
    display: grid;
    grid-template-columns: minmax() (100px, max-content) 1fr;
    width: 300px;
`;

const Answer2 = styled.div`
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
`;

const Answer3 = styled.div`
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
`;

const Answer4 = styled.div`
    font-size: 16px;
    border-radius: 10px;
    background-color: #00000046;
`;
