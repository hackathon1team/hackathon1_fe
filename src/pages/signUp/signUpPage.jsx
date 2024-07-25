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
    const [user, setUser] = useState({
        name: '',
        userId: '',
        userPw: '',
    });
    const [isCheckAndError, setIsCheckAndError] = useState({
        isError: false,
        isCheckIdMs: '',
    });

    const upCount = () => {
        if (currentPageNum === 1 && user.name === '')
            return setIsCheckAndError((prev) => ({ ...prev, isError: true }));
        if (currentPageNum === 2 && user.userId === '')
            return setIsCheckAndError((prev) => ({ ...prev, isError: true }));
        if (
            currentPageNum === 2 &&
            isCheckAndError.isCheckIdMs !== '사용가능한 아이디입니다.'
        )
            return setIsCheckAndError((prev) => ({
                ...prev,
                isCheckIdMs: '중복확인 해주세요.',
            }));

        SetCurrentPageNum((prev) => prev + 1);
        setIsCheckAndError((prev) => ({ isError: false, isCheckIdMs: '' }));
    };
    const downCount = () => {
        SetCurrentPageNum((prev) => prev - 1);
        setIsCheckAndError((prev) => ({ ...prev, isError: false }));
    };
    const handleSignUp = () => {
        if (currentPageNum === 3 && user.userPw === '')
            return setIsCheckAndError((prev) => ({ ...prev, isError: true }));
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
                            {currentPageNum === 1 && (
                                <SignUpName
                                    setUser={setUser}
                                    name={user.name}
                                    setIsCheckAndError={setIsCheckAndError}
                                />
                            )}

                            {currentPageNum === 2 && (
                                <SignUpId
                                    setUser={setUser}
                                    id={user.userId}
                                    setIsCheckAndError={setIsCheckAndError}
                                />
                            )}
                            {currentPageNum === 3 && (
                                <SignUpPassword
                                    setUser={setUser}
                                    pw={user.userPw}
                                    setIsCheckAndError={setIsCheckAndError}
                                />
                            )}
                            <ErrorBox
                                isSuccess={
                                    isCheckAndError.isCheckIdMs ===
                                    '사용가능한 아이디입니다.'
                                }
                            >
                                {isCheckAndError.isCheckIdMs}
                                {isCheckAndError.isError
                                    ? '값을 입력해주세요'
                                    : currentPageNum === 2 &&
                                        isCheckAndError.isCheckIdError
                                      ? '중복확인 해주세요.'
                                      : ''}
                            </ErrorBox>
                        </Container>
                        <ButtonWrap2>
                            <CustomButton icon={'left'} onClick={downCount}>
                                이전 질문
                            </CustomButton>
                            {currentPageNum === 3 ? (
                                <CustomButton
                                    icon={'right'}
                                    onClick={handleSignUp}
                                    disable={true}
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
    /* height: 200px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const ButtonWrap2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const ErrorBox = styled.h2`
    color: ${({ isSuccess }) => (isSuccess ? '#88d459' : '#a93b3b')};
    font-size: 17px;
    margin-top: 10px;
`;
