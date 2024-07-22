import styled from 'styled-components';
import meco from '../../../assets/Img//questionImg/happy.png';
const QuestionSum = () => {
    return (
        <>
            <QuestionSumImg>
                <img src={meco} alt="QuestionSumImg" />
            </QuestionSumImg>
            <QuestionAnswer>
                <Wrapper2>
                    <Question2>오늘의 인상깊은 사건은 무엇인가요?</Question2>
                    <Answer2>친구들과의 약속</Answer2>
                </Wrapper2>
                <Wrapper2>
                    <Question2>
                        이 사건에서 느낀 감정은 무엇이고 원인은 무엇인가요?
                    </Question2>
                    <Answer2>
                        오랜만에 친구들을 만나 너무나도 행복했답니다~ 오랜만에
                        친구들을 만나 너무나도 행복했답니다~ 오랜만에 친구들을
                        만나 너무나도 행복했답니다~ 오랜만에 친구들을 만나
                        너무나도 행복했답니다~
                    </Answer2>
                </Wrapper2>
                <Wrapper2>
                    <Question2>
                        이 감정이 내 행동에 어떻게 영향을 미치고 있나요?
                    </Question2>
                    <Answer2>
                        친구들에게 “나 지금 너무 행복해” 라고 말했어요!
                    </Answer2>
                </Wrapper2>
                <Wrapper2>
                    <Question2>
                        앞으로 비슷한 상황이 발생했을 때, 어떻게 대처하면
                        좋을까요?
                    </Question2>
                    <Answer2>친구는 소중하다...................</Answer2>
                </Wrapper2>
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
    color: #edececde;
    font-weight: 700;
`;

const Wrapper1 = styled.div`
    padding-bottom: 8%;
`;

const Wrapper2 = styled.div`
    padding-bottom: 8%;
`;
const Question2 = styled.div`
    padding-bottom: 2%;
    font-size: 18px;
`;
const Answer2 = styled.div`
    font-size: 16px;
    border-radius: 10px;
    background-color: #0000002b;
    padding: 3%;
`;

const Wrapper3 = styled.div`
    padding-bottom: 8%;
`;

const Wrapper4 = styled.div`
    padding-bottom: 8%;
`;
