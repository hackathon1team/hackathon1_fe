import styled from 'styled-components';
import { BackGroundImg } from '../../../styles/common';
import Background from '../../../assets/Img/backgroundImg/meta_1.png';

function MetaQuestion() {
    return (
        <BackImg>
            <MainQuestion>
                자신에 대해서 <br />
                얼마나 알고 있나요?
            </MainQuestion>
            <MiniQuestion>
                자신의 장점과 단점은 무엇인가요? &#40;1/5&#41;
            </MiniQuestion>
            <Progressbar>---별 진행바 자리입니다---</Progressbar>
            <MainAnswer>
                <textarea
                    name="AboutMeAnswer"
                    placeholder="답변이 어려우면 작성하지 않아도 괜찮아요 &#10;언제든 다시 작성이 가능합니다"
                    rows={6}
                    cols={40}
                />
            </MainAnswer>
            <MQButton>
                <MQPrevButton>이전 질문</MQPrevButton>
                <MQNextButton>다음 질문</MQNextButton>
            </MQButton>
        </BackImg>
    );
}
export default MetaQuestion;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding-top: 50%;
    padding: 50% 40px 0 40px;
`;

const MainQuestion = styled.div`
    font-size: 25px;
    font-weight: 700;
    color: white;
    padding-bottom: 20px;
`;

const MiniQuestion = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #edececd7;
    padding-bottom: 20px;
`;

const Progressbar = styled.div`
    padding-bottom: 20px;
`;

const MainAnswer = styled.div`
    textarea {
        font-size: 16px;
        height: 180px;
        resize: none;
        outline: none;
        border-radius: 10px;
        width: 100%;
        background-color: #00000046;
        ::placeholder {
            color: white;
            font-size: 14px;
            font-weight: 700;
            padding-top: 4%;
            padding-left: 4%;
        }
    }
`;

const MQButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5% 0;
`;

const MQPrevButton = styled.button`
    border: none;
    border-radius: 30px;
    font-size: 15px;
    color: #5a639c;
    padding: 10px 20px;
    font-weight: 700;
    cursor: pointer;
`;

const MQNextButton = styled.button`
    border: none;
    border-radius: 30px;
    font-size: 15px;
    color: #5a639c;
    padding: 10px 20px;
    font-weight: 700;
    cursor: pointer;
`;
