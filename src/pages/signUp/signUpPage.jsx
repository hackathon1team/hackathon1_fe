import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/signUp_1.png';
import Background1 from '../../assets/Img/backgroundImg/signUp_2.png';
import { BackGroundImg } from '../../styles/common';
import Star from '../../assets/Img/signUpImg/star.png';

function SignUpPage() {
    return (
        <>
            <BackImg>
                <Box>
                    <TopBox>
                        안녕.
                        <br />
                        나는 메코야
                        <StarImg src={Star} alt="" />
                    </TopBox>
                    <BottomBox>메코와 함께 자기 자신을 알아볼까요?</BottomBox>

                    <SignUpButton>회원가입 하러가기</SignUpButton>
                </Box>
            </BackImg>
            <BackImg1>
                <Container>
                    <CompleteLine></CompleteLine>
                    <NameBox0>
                        <NameBox1>당신의 이름은 무엇인가요?</NameBox1>
                    </NameBox0>
                </Container>
            </BackImg1>
        </>
    );
}
export default SignUpPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    justify-content: center;
`;

const Box = styled.div`
    margin-top: 200px;
    width: 80%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: aqua;
`;

const TopBox = styled.div`
    width: 80%;
    height: 100px;
    font-size: 32px;
    color: white;
`;

const StarImg = styled.img`
    width: 17px;
    height: 16px;
    margin-bottom: 12px;
    margin-left: 5px;
`;
const BottomBox = styled.div`
    width: 80%;
    height: 50px;
    font-size: 18px;
    color: #dad9e3;
`;

const BackImg1 = styled.div`
    ${BackGroundImg(Background1)}
    display: flex;
    justify-content: center;
`;

const SignUpButton = styled.button`
    border: none;
    border-radius: 20px;
    width: 180px;
    font-size: 15px;
    color: #5a639c;
    padding: 10px 20px;
    font-weight: 700;
    margin-left: 300px;
`;

const CompleteLine = styled.div`
    width: 80%;
    height: 7px;
    background-color: #ffffff;
    border-radius: 10px;
`;

const Container = styled.div`
    margin-top: 200px;
    width: 80%;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: #ff00ea;
`;

const NameBox1 = styled.div`
    width: 80%;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: yellow;
`;
const NameBox0 = styled.div`
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: yellow;
`;
