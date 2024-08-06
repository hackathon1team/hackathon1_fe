import SignUpName from './components/signUpName';
import SignUpId from './components/signUpId';
import SignUpIntro from './components/signUpIntro';
import SignUpPassword from './components/signUpPassword';
import { useState } from 'react';
import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Cloud1 from '../../assets/Img/LogInImg/Cloud1.png';
import Cloud2 from '../../assets/Img/LogInImg/Cloud2.png';
import CustomButton from '../../components/customButton/customButton';
import SignUpMadal from './components/SignUpModal';
import ProgressBar from '../../components/progressBar/progressBar';
import { usePostSignUp } from '../../query/Post/usePostSignUp';

function SignUpPage() {
    const [currentPageNum, SetCurrentPageNum] = useState(0);
    const [isModalView, setIsModalView] = useState(false);
    const [user, setUser] = useState({
        userName: '',
        userId: '',
        userPw: '',
    });
    const [isCheckAndError, setIsCheckAndError] = useState({
        isError: false,
        isCheckIdMs: '',
    });

    const { mutate: postSignUp } = usePostSignUp(setIsModalView);

    const upCount = () => {
        if (
            currentPageNum === 1 &&
            (user.userName.trim().length < 2 ||
                user.userName.trim().length > 12)
        )
            return setIsCheckAndError(() => ({
                isCheckIdMs: '최소 2글자 최대 12글자 입력해주세요.',
                isError: true,
            }));
        if (currentPageNum === 2 && user.userId.trim().length < 4)
            return setIsCheckAndError(() => ({
                isCheckIdMs: '최소 4글자 최대 12글자 입력해주세요.',
                isError: true,
            }));
        if (
            currentPageNum === 2 &&
            isCheckAndError.isCheckIdMs !== '사용가능한 아이디입니다.'
        )
            return setIsCheckAndError((prev) => ({
                ...prev,
                isCheckIdMs: '중복확인 해주세요.',
            }));

        if (currentPageNum === 1 && user.name === '') return;
        if (currentPageNum === 2 && user.userId === '') return;
        SetCurrentPageNum((prev) => prev + 1);
        setIsCheckAndError((prev) => ({ isError: false, isCheckIdMs: '' }));
    };
    const downCount = () => {
        SetCurrentPageNum((prev) => prev - 1);
        setIsCheckAndError((prev) => ({ ...prev, isError: false }));
    };
    const handleSignUp = () => {
        if (currentPageNum === 3 && user.userPw.trim() === '')
            return setIsCheckAndError((prev) => ({ ...prev, isError: true }));
        postSignUp(user);
        if (currentPageNum === 3 && user.userPw === '') return;
        setIsModalView(true);
    };

    return (
        <>
            {currentPageNum === 0 ? (
                <SignUpIntro upCount={upCount} />
            ) : (
                <BackImg1>
                    <Wrapper>
                        <Cloud1Img src={Cloud1} alt="" />
                        <Cloud2Img src={Cloud2} alt="" />

                        <Container>
                            <ProgressBar
                                currentPageNum={currentPageNum}
                                limit={3}
                            />
                            {currentPageNum === 1 && (
                                <SignUpName
                                    setUser={setUser}
                                    name={user.userName}
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
                                {isCheckAndError.isError &&
                                    isCheckAndError.isCheckIdMs}
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
                        <SignUpMadal
                            setIsModalView={setIsModalView}
                            user={user}
                        />
                    )}
                </BackImg1>
            )}
        </>
    );
}
export default SignUpPage;

const BackImg1 = styled.div`
    ${BackGroundImg()}
    display: flex;
    flex-direction: column;
`;
const Cloud1Img = styled.img`
    position: absolute;
    top: 50px;
    left: 10px;
`;
const Cloud2Img = styled.img`
    position: absolute;
    right: 10px;
    top: 100px;
    width: 140px;
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
