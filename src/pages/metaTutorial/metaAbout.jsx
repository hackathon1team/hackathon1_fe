import styled, { keyframes } from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import CustomButton from '../../components/customButton/customButton';
import { useNavigate } from 'react-router-dom';

const MetaAbout = () => {
    const navigate = useNavigate();
    const handleQuestion = () => {
        navigate('/socrates');
    };
    return (
        <BackImg>
            <AboutMetaCog>
                <AboutMetaWord>
                    <MetaTitle>메타인지란?</MetaTitle>
                    <MetaWord1>자기인식</MetaWord1>
                    <MetaWord2>자기평가</MetaWord2>
                    <MetaWord3>계획</MetaWord3>
                </AboutMetaWord>
                <DesWrapper>
                    <AboutMetaDes>
                        <span>메타인지</span>는 자기 자신의 사고 과정에 대해{' '}
                        <br />
                        생각하는 능력을 의미합니다. <br />
                        즉, 자신의 생각, 학습, 이해, 기억 등을 <br />
                        인식하고 조절하는 능력입니다.
                    </AboutMetaDes>
                </DesWrapper>
                <BtnWrapper>
                    {/* <MetaButton>질문 대답 하러가기</MetaButton> */}
                    <CustomButton icon={'right'} onClick={handleQuestion}>
                        질문 대답 하러가기
                    </CustomButton>
                </BtnWrapper>
            </AboutMetaCog>
        </BackImg>
    );
};

export default MetaAbout;
const BackImg = styled.div`
    ${BackGroundImg()}
    background: linear-gradient(to bottom, #59629B 0%,#59629be4 18%, #9B86BD 100%);
`;
const aniMation = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const AboutMetaCog = styled.div`
    /* padding-top: 18%; */
`;

const AboutMetaWord = styled.div`
    h1 {
        font-size: 32px;
        color: white;
        text-align: center;
        animation: ${aniMation} 0s ease 0s;
    }
`;

const MetaWord1 = styled.div`
    @media screen and (max-width: 400px) {
        padding-top: 15%;
    }
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 20%;
    padding-left: 15%;
    animation: ${aniMation} 2s ease 0s;
`;

const MetaWord2 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 8%;
    padding-left: 60%;
    animation: ${aniMation} 4.5s ease 0s;
`;

const MetaWord3 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 8%;
    padding-left: 25%;
    animation: ${aniMation} 5.5s ease 0s;
`;
const DesWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
    animation: ${aniMation} 6s ease 0s;
`;
const AboutMetaDes = styled.div`
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    color: #ffffffc7;
    padding: 15% 0 5% 0;
    span {
        font-size: 20px;
        color: #444b77;
    }
`;
const BtnWrapper = styled.div`
    margin: 0 30px;
    display: flex;
    justify-content: end;
    animation: ${aniMation} 6s ease 0s;
`;
const MetaTitle = styled.h1`
    margin: 0px auto;
    height: 350px;
    @media screen and (max-width: 500px) {
        height: 300px;
    }
    @media screen and (max-width: 375px) {
        height: 150px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(#fefbd878 1%, #fefbd85a 10px, transparent 50%);
`;
