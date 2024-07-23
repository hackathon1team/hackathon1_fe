import SignUpName from './components/signUpName';
import SignUpId from './components/signUpId';
import SignUpIntro from './components/signUpIntro';
import SignUpPassword from './components/signUpPassword';
import { useState } from 'react';
import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background1 from '../../assets/Img/backgroundImg/signUp_2.png';
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
const ButtonWrap2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
