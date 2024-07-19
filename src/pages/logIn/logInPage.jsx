import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/logInStatistics.png';
import Meco from '../../assets/Img/LogInImg/Meco.png';

function LogInPage() {
    return (
        <BackImg>
            <Box>
                <TopBox>
                    <LogoBox>로고</LogoBox>
                    <MecoImg src={Meco} alt="" />
                </TopBox>
                <MiddleBox>
                    <LogInInput
                        type="text"
                        name=""
                        placeholder="아이디를 입력하세요"
                    />
                    <LogInInput
                        type="password"
                        name=""
                        placeholder="비밀번호를 입력하세요"
                    />
                </MiddleBox>
                <BottomBox>
                    <LogInBt type="Button" value="로그인" />
                    <LogInBt type="Button" value="가입하러 가기" />
                </BottomBox>
            </Box>
        </BackImg>
    );
}
export default LogInPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    justify-content: center;
`;

const Box = styled.div`
    margin-top: 50px;
    width: 80%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBox = styled.div`
    width: 60%;
    height: 103px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const MecoImg = styled.img`
    width: 56px;
    height: 103px;
`;
const LogoBox = styled.div`
    width: 30%;
    height: 30px;
    font-size: 30px;
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
    width: 254px;
    height: 43px;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 50px;
    background-color: #6a6b9d;
    font-size: 16px;
    margin-bottom: 20px;
    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
    }
`;
const LogInBt = styled.input`
    border: 0px;
    width: 254px;
    height: 43px;
    border-radius: 10px;
    font-size: 16px;
    background-color: #65628b;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 24px;
    padding-top: 3px;
    cursor: pointer;
`;
