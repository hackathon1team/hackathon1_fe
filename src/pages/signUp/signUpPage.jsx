import SignUpName from './components/signUpName';
import SignUpId from './components/signUpId';
import SignUpIntro from './components/signUpIntro';
import SignUpPassword from './components/signUpPassword';
import { useState } from 'react';
import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background1 from '../../assets/Img/backgroundImg/signUp_2.png';
import Star from '../../assets/Img/signUpImg/star.png';
import CustomButton from '../../components/customButton/customButton';
import SignUpMadal from './components/SignUpModal';
import ProgressBar from '../../components/progressBar/progressBar';

function SignUpPage() {
    const [currentPageNum, SetCurrentPageNum] = useState(0);
    const [isModalView, setIsModalView] = useState(false);

    const upCount = () => {
        SetCurrentPageNum((prev) => prev + 1);
    };
    const downCount = () => {
        SetCurrentPageNum((prev) => prev - 1);
    };
    const handleSignUp = () => {
        // alert('회원가입 기능은 준비중입니다 :)');
        setIsModalView(true);
    };

    return (
        <>
            {currentPageNum === 0 ? (
                <SignUpIntro upCount={upCount} />
            ) : (
                <BackImg1>
                    <Wrapper>
                        <Container>
                            <ProgressBar
                                currentPageNum={currentPageNum}
                                limit={3}
                            />
                            {currentPageNum === 1 && <SignUpName />}
                            {currentPageNum === 2 && <SignUpId />}
                            {currentPageNum === 3 && <SignUpPassword />}
                        </Container>
                        <ButtonWrap2>
                            <CustomButton icon={'left'} onClick={downCount}>
                                이전 질문
                            </CustomButton>
                            {currentPageNum === 3 ? (
                                <CustomButton
                                    icon={'right'}
                                    onClick={handleSignUp}
                                >
                                    회원가입 하기
                                </CustomButton>
                            ) : (
                                <CustomButton icon={'right'} onClick={upCount}>
                                    다음 질문
                                </CustomButton>
                            )}
                        </ButtonWrap2>
                    </Wrapper>
                    {isModalView && (
                        <SignUpMadal setIsModalView={setIsModalView} />
                    )}
                </BackImg1>
            )}
        </>
    );
}
export default SignUpPage;

const BackImg1 = styled.div`
    ${BackGroundImg(Background1)}
    display: flex;
    flex-direction: column;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const Container = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const CompleteLineWrap = styled.div`
    width: 100%;
    height: 7px;
    background-color: #ffffff;
    border-radius: 10px;
`;
const ButtonWrap2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const CompleteLine = styled.div`
    width: ${({ width }) => (width ? width : '0')}%;
    height: 7px;
    background-color: #e2bbe9;
    border-radius: 10px;
    position: relative;
`;
const StarImg2 = styled.img`
    width: 17px;
    height: 16px;
    margin-bottom: 12px;
    margin-left: 5px;
    position: absolute;
    right: -10px;
    top: -4px;
`;
