import styled, { keyframes } from 'styled-components';
import ChattingMecoBox from './components/chattingMecoBox';
import ChattingUserBox from './components/chattingUserBox';
import { useState } from 'react';
import Background from '../../assets/Img/backgroundImg/calendar&question.png';
import { BackGroundImg } from '../../styles/common';
import { useNavigate, useParams } from 'react-router-dom';
import CustomButton from '../../components/customButton/customButton';
import { useGetToday } from '../../hooks/useGetToday';

function MecoQuestion() {
    const { contents } = useParams();
    const navigate = useNavigate();
    const today = useGetToday();

    const mecoQuestionList = [
        '이 사건에 대해 어떤 감정은 무엇이고 원인은 무엇인가요구르트?',
        '이건 테스트 질문 (2번째 질문)',
        '이것도 세번째 테스트 질문입니다!',
    ];
    const [userAnswerList, setUserAnswerList] = useState({
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: '',
    });

    const [inputVal, setInputVal] = useState('');

    const handleAnswer = () => {
        setInputVal('');
        if (userAnswerList.firstAnswer.length === 0)
            return setUserAnswerList((prev) => ({
                ...prev,
                firstAnswer: inputVal ? inputVal : '(생략)',
            }));
        if (userAnswerList.secondAnswer.length === 0)
            return setUserAnswerList((prev) => ({
                ...prev,
                secondAnswer: inputVal ? inputVal : '(생략)',
            }));
        if (userAnswerList.thirdAnswer.length === 0)
            return setUserAnswerList((prev) => ({
                ...prev,
                thirdAnswer: inputVal ? inputVal : '(생략)',
            }));
    };
    return (
        <BackImg>
            <Wrapper>
                <Title>
                    오늘도 고생했어요.
                    <br />
                    메코는 김태기님한테
                    <br />
                    궁금한게 많아요.
                </Title>
                <ChattingTotalBox>
                    <ChattingMecoBox
                        text={'오늘의 인상깊은 사건은 무엇인가요?'}
                        isFix={true}
                    />
                    <>
                        <ChattingUserBox text={contents} />
                    </>
                    <ChattingMecoBox text={mecoQuestionList[0]} />
                    {userAnswerList.firstAnswer.length !== 0 && (
                        <>
                            <ChattingUserBox
                                text={userAnswerList.firstAnswer}
                            />
                            <ChattingMecoBox text={mecoQuestionList[1]} />
                        </>
                    )}
                    {userAnswerList.secondAnswer.length !== 0 && (
                        <>
                            <ChattingUserBox
                                text={userAnswerList.secondAnswer}
                            />
                            <ChattingMecoBox text={mecoQuestionList[2]} />
                        </>
                    )}
                    {userAnswerList.thirdAnswer.length !== 0 && (
                        <>
                            <ChattingUserBox
                                text={userAnswerList.thirdAnswer}
                            />
                            <ChattingMecoBox
                                text={`그렇군요. 태기님 오늘 하루도\n고생 많으셨어요 !`}
                            />
                        </>
                    )}
                </ChattingTotalBox>
                {userAnswerList.thirdAnswer.length === 0 ? (
                    <InputWrapper>
                        <AddChatting
                            placeholder="메코한테는 솔직한 답변을 해주세요."
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                        />
                        <Button onClick={handleAnswer}>보내기</Button>
                    </InputWrapper>
                ) : (
                    <EndBox>
                        <CustomButton
                            icon={'right'}
                            onClick={() => navigate(`/questionSum/${today}`)}
                        >
                            대화 정리
                        </CustomButton>
                    </EndBox>
                )}
            </Wrapper>
        </BackImg>
    );
}
export default MecoQuestion;
const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 72px 30px 0 30px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Title = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
`;
const ChattingTotalBox = styled.div`
    height: 50vh;
    overflow: auto;
`;
const InputWrapper = styled.div`
    position: relative;
`;
const Button = styled.button`
    background-color: #534a69aa;
    border: none;
    font-size: 14px;
    color: white;
    padding: 3px 10px;
    border-radius: 5px;
    position: absolute;
    right: 10px;
    bottom: 15px;
`;
const AddChatting = styled.textarea`
    width: 100%;
    height: 20vh;
    background-color: #6e628c;
    border-radius: 10px;
    border: none;
    resize: none;
    padding: 20px;
    ::placeholder {
        color: #edececc6;
    }
    font-size: 16px;
`;
const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  80% {    
    opacity: 0;
  }
  100% {    
    opacity: 1;
  }
`;
const EndBox = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: end;
    animation: ${fadeIn} 1s ease-in-out;
    justify-content: end;
`;
