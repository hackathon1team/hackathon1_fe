import styled from 'styled-components';

const MetaAbout = () => {
    return (
        <AboutMetaCog>
            <AboutMetaWord>
                <h1>메타인지란?</h1>
                <MetaWord1>자기인식</MetaWord1>
                <MetaWord2>자기평가</MetaWord2>
                <MetaWord3>계획</MetaWord3>
            </AboutMetaWord>
            <AboutMetaDes>
                <span>메타인지</span>는 자기 자신의 사고 과정에 대해 <br />
                생각하는 능력을 의미합니다. <br />
                즉, 자신의 생각, 학습, 이해, 기억 등을 <br />
                인식하고 조절하는 능력입니다.
            </AboutMetaDes>
            <MetaButton>질문 대답 하러가기</MetaButton>
        </AboutMetaCog>
    );
};

export default MetaAbout;

const AboutMetaCog = styled.div`
    padding-top: 18%;
`;

const AboutMetaWord = styled.div`
    h1 {
        font-size: 32px;
        color: white;
        text-align: center;
    }
`;

const MetaWord1 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 25%;
    padding-left: 15%;
`;

const MetaWord2 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 8%;
    padding-left: 60%;
`;

const MetaWord3 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 8%;
    padding-left: 25%;
`;

const AboutMetaDes = styled.div`
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    color: #ffffffc7;
    padding: 15% 0 5% 10%;

    span {
        font-size: 16px;
        color: #444b77;
    }
`;

const MetaButton = styled.button`
    border: none;
    border-radius: 20px;
    font-size: 13px;
    color: #5a639c;
    padding: 8px 12px;
    font-weight: 700;
    margin-left: 55%;
`;
