import styled from 'styled-components';
import Background from '../../assets/Img/backgroundImg/signUp_1.png';
import Background1 from '../../assets/Img/backgroundImg/signUp_2.png';
import { BackGroundImg } from '../../styles/common';
import Star from '../../assets/Img/signUpImg/star.png';

function SignUpPage() {
    return (
        <>
            <BackImg>
                <Wrapper>
                    <Box>
                        <TopBox>
                            안녕.
                            <br />
                            나는 메코야
                            <StarImg src={Star} alt="" />
                        </TopBox>
                        <BottomBox>
                            메코와 함께 자기 자신을 알아볼까요?
                        </BottomBox>
                    </Box>
                    <ButtonWrap>
                        <RightBt>회원가입 하러 가기</RightBt>
                    </ButtonWrap>
                </Wrapper>
            </BackImg>
            <BackImg1>
                <Wrapper>
                    <Container>
                        <CompleteLineWrap>
                            <CompleteLine>
                                <StarImg src={Star} alt="" />
                            </CompleteLine>
                        </CompleteLineWrap>
                        <NameBox0>
                            <NameBox1>당신의 이름은 무엇인가요?</NameBox1>
                            <NameInput
                                type="text"
                                name=""
                                placeholder="이름을 작성해주세요"
                            />
                        </NameBox0>
                    </Container>
                    <ButtonWrap2>
                        <LeftBt>이전</LeftBt>
                        <RightBt>다음</RightBt>
                    </ButtonWrap2>
                </Wrapper>
            </BackImg1>
            <BackImg1>
                <Wrapper>
                    <Container>
                        <CompleteLineWrap>
                            <CompleteLine2>
                                <StarImg src={Star} alt="" />
                            </CompleteLine2>
                        </CompleteLineWrap>
                        <NameBox0>
                            <NameBox1>사용 할 아이디를 작성해주세요.</NameBox1>
                            <IdBox>
                                <NameInput2
                                    type="text"
                                    name=""
                                    placeholder="아이디 최대 10글자"
                                />
                                <IdCheckBt type="Button" value="중복확인" />
                            </IdBox>
                        </NameBox0>
                    </Container>
                    <ButtonWrap2>
                        <LeftBt>이전</LeftBt>
                        <RightBt>다음</RightBt>
                    </ButtonWrap2>
                </Wrapper>
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
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    position: absolute;
    right: -10px;
    top: -4px;
`;
const BottomBox = styled.div`
    width: 100%;
    height: 50px;
    font-size: 18px;
    color: #dad9e3;
`;

const BackImg1 = styled.div`
    ${BackGroundImg(Background1)}
    display: flex;
    flex-direction: column;
`;

const CompleteLineWrap = styled.div`
    width: 100%;
    height: 7px;
    background-color: #ffffff;
    border-radius: 10px;
`;
const CompleteLine = styled.div`
    width: 61px;
    height: 7px;
    background-color: #e2bbe9;
    border-radius: 10px;
    position: relative;
`;
const CompleteLine2 = styled.div`
    width: 120px;
    height: 7px;
    background-color: #e2bbe9;
    border-radius: 10px;
    position: relative;
`;

const Container = styled.div`
    margin-top: 200px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NameBox1 = styled.div`
    width: 100%;
    height: 100px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
`;
const NameBox0 = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const NameInput = styled.input`
    border-width: 0 0 2px;
    border-color: white;
    width: 100%;
    font-size: 22px;
    padding-left: 5px;
    padding-right: 50px;
    padding-bottom: 10px;
    background-color: transparent;
    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
        border-color: #e2bbe9;
        color: white;
    }
`;
const IdCheckBt = styled.input`
    border: 0px;
    width: 20%;
    height: 43px;
    border-radius: 10px;
    font-size: 14px;
    background-color: #65628b;
    color: #ffffff;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        background-color: #e2bbe9a8;
        transition: 0.3s;
        color: #ffffff;
    }
`;

const ButtonWrap2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const NameInput2 = styled.input`
    border-width: 0 0 2px;
    border-color: white;
    width: 75%;
    font-size: 22px;
    padding-left: 5px;
    padding-right: 50px;
    padding-bottom: 10px;
    background-color: transparent;
    &::placeholder {
        color: #edecec;
        opacity: 70%;
    }
    &:focus {
        outline: none;
        border-color: #e2bbe9;
        color: white;
    }
`;
const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const LeftBt = styled.div`
    width: 120px;
    background-color: pink;
    display: flex;
    justify-content: center;
`;
const RightBt = styled.div`
    width: 120px;
    display: flex;
    justify-content: center;
    background-color: pink;
`;
const ButtonWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const IdBox = styled.div`
    width: 100%;
    display: flex;
`;
