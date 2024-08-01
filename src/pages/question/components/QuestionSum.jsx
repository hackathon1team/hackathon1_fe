import styled from 'styled-components';
import meco from '../../../assets/Img//questionImg/happy.png';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/calendar&question.png';
import CustomButton from '../../../components/customButton/customButton';
import { useNavigate, useParams } from 'react-router-dom';
import useGetMecoQuestions from '../../../query/Get/useGetMecoQuestions';
import { useState } from 'react';
import ReactCalendar from '../../../components/datePicker/datePicker';

const QuestionSum = () => {
    const navigate = useNavigate();
    const { today } = useParams();

    const { data } = useGetMecoQuestions(today);
    const [isViewModal, setIsViewModal] = useState(false);

    const modalCloseFn = () => {
        setIsViewModal(false);
    };

    return (
        <BackImg>
        <BackImg>
            <QuestionSumImg>
                <img src={meco} alt="QuestionSumImg" />
            </QuestionSumImg>
            {Object.keys(data).length === 0 ? (
                <NoneDataWrapper>
                    <NoneData>
                        조회한 날의 메코와
                        <br />
                        대화가 존재하지 않습니다.
                    </NoneData>
                    <AnotherDateBtn
                        onClick={() => setIsViewModal((prev) => !prev)}
                    >
                        다른 날 보러가기
                    </AnotherDateBtn>
                </NoneDataWrapper>
            ) : (
                <>
                    <QuestionAnswer>
                        <Wrapper>
                            <Question>
                                오늘의 인상깊은 사건은 무엇인가요?
                            </Question>
                            <Answer>{data.contents}</Answer>
                        </Wrapper>
                        {data.questions.map((question, idx) => (
                            <Wrapper key={idx}>
                                <Question>{question}</Question>
                                <Answer>{data.answers[idx]}</Answer>
                            </Wrapper>
                        ))}
                    </QuestionAnswer>
                    <BtnWrapper>
                        <CustomButton
                            icon="right"
                            onClick={() => navigate('/question')}
                        >
                            홈으로
                        </CustomButton>
                    </BtnWrapper>
                </>
            )}
            {isViewModal && (
                <ReactCalendar
                    url={'/questionSum/'}
                    modalCloseFn={modalCloseFn}
                />
            )}
        </BackImg>
    );
};

export default QuestionSum;
const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;
const QuestionSumImg = styled.div`
    & > img {
        width: 80%;
    }
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
    padding-bottom: 20px;
`;
const NoneDataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const NoneData = styled.h2`
    font-size: 20px;
    color: #d4d2d2;
    text-align: center;
    margin-top: 30px;
    line-height: 150%;
`;
const AnotherDateBtn = styled.h2`
    background-color: #aea8ba45;
    width: 200px;
    text-align: center;
    color: #ffb0b0;
    font-size: 15px;
    padding: 10px 0;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
`;
