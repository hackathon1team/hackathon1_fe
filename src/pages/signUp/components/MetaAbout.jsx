import styled from 'styled-components';

const MetaAbout = () => {
    return (
        <AboutMetacog>
            <AboutMetaWord>
                <h1>메타인지란?</h1>
                <Metaword1>자기인식</Metaword1>
                <Metaword2>자기평가</Metaword2>
                <Metaword3>계획</Metaword3>
            </AboutMetaWord>
            <AboutMetaDes>
                <span>메타인지</span>는 자기 자신의 사고 과정에 대해 <br />
                생각하는 능력을 의미합니다. <br />
                즉, 자신의 생각, 학습, 이해, 기억 등을 <br />
                인식하고 조절하는 능력입니다.
            </AboutMetaDes>
            <Metabutton>질문 대답 하러가기</Metabutton>
        </AboutMetacog>
    );
};

export default MetaAbout;

const AboutMetacog = styled.div``;

const AboutMetaWord = styled.div`
    h1 {
        font-size: 32px;
        color: white;
        text-align: center;
        margin-top: 100px;
    }
`;

const Metaword1 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 100px;
    padding-left: 100px;
`;

const Metaword2 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding-top: 70px;
    padding-left: 300px;
`;

const Metaword3 = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #ffffffc7;
    padding: 70px 0px 50px 150px;
`;

const AboutMetaDes = styled.div`
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    color: #ffffffc7;
    padding: 30px 110px;

    span {
        font-size: 18px;
        color: #444b77;
    }
`;

const Metabutton = styled.button`
    border: none;
    border-radius: 20px;
    font-size: 15px;
    color: #5a639c;
    padding: 10px 20px;
    font-weight: 600;
    margin-left: 300px;
`;
