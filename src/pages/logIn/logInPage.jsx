import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/logInStatistics.png';
import Meco from '../../assets/Img/meco.png';
import GlassmorphismModal from '../../components/glassmorphismModal/glassmorphismModal';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { usePostLogIn } from '../../query/Post/usePostLogIn';
import useToast from '../../components/toast/toast';
import TokenService from '../../utils/tokenService';

// import TokenService from '../../utils/tokenService';

function LogInPage() {
    const navigate = useNavigate();

    const [idAndPw, setIdAndPw] = useState({
        userId: '',
        userPw: '',
    });
    const { mutate } = usePostLogIn('/');

    const handleLogIn = () => {
        mutate(idAndPw);
    };
    useEffect(() => {
        if (!TokenService.getAccessToken()) return navigate('/login');
    }, []);

    return (
        <BackImg>
            <Box>
                <GlassmorphismModal>
                    <TopBox>
                        <LogoBox>로고</LogoBox>
                        <MecoImg src={Meco} alt="" />
                    </TopBox>
                    <MiddleBox>
                        <LogInInput
                            type="text"
                            name="id"
                            placeholder="아이디를 입력하세요"
                            onChange={(e) =>
                                setIdAndPw((prev) => ({
                                    ...prev,
                                    userId: e.target.value,
                                }))
                            }
                        />
                        <LogInInput
                            type="password"
                            name="pw"
                            placeholder="비밀번호를 입력하세요"
                            onChange={(e) =>
                                setIdAndPw((prev) => ({
                                    ...prev,
                                    userPw: e.target.value,
                                }))
                            }
                        />
                    </MiddleBox>
                    <BottomBox>
                        <LogInBt
                            type="Button"
                            disabled={
                                idAndPw.userId.trim() === '' ||
                                idAndPw.userPw.trim() === ''
                            }
                            onClick={handleLogIn}
                        >
                            로그인
                        </LogInBt>
                        <LogInBt
                            type="Button"
                            onClick={() => navigate('/signUp')}
                        >
                            가입하러 가기
                        </LogInBt>
                    </BottomBox>
                </GlassmorphismModal>
            </Box>
        </BackImg>
    );
}
export default LogInPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 120px;
`;

const Box = styled.form`
    margin-top: 50px;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBox = styled.div`
    /* width: 60%; */
    width: 75%;
    height: 103px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MecoImg = styled.img`
    height: 103px;
`;
const LogoBox = styled.div`
    font-size: 30px;
    color: white;
    font-weight: bold;
`;
const MiddleBox = styled.div`
    width: 75%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const BottomBox = styled.div`
    width: 75%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const LogInInput = styled.input`
    border: 0px;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
    background-color: #6a6b9d;
    font-size: 16px;
    margin-bottom: 20px;
    color: white;
    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
    }
`;
const LogInBt = styled.button`
    border: 0px;
    width: 100%;
    height: 43px;
    border-radius: 10px;
    font-size: 16px;
    background-color: #65628b;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 24px;
    padding-top: 3px;
    cursor: pointer;
    font-weight: bold;
    &:disabled {
        opacity: 0.9;
    }
`;
