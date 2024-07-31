import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import Background from '../../assets/Img/backgroundImg/meta_1.png';
import CustomButton from '../../components/customButton/customButton';
import { useEffect, useState } from 'react';
import { socratestQuestionList } from '../../constants/socratesQuestionList';
import ProgressBar from '../../components/progressBar/progressBar';
import { useNavigate } from 'react-router-dom';
import useGetSocrates from '../../query/Get/useGetSocrates';
import { usePatchMetaQuestion } from '../../query/Patch/usePatchMetaQuestion';

function Socrates() {
    const navigate = useNavigate();
    const { data: getSocratesData, refetch } = useGetSocrates();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { mutate } = usePatchMetaQuestion(navigate);

    const [answer, setAnswer] = useState({
        answer1: getSocratesData[0],
        answer2: getSocratesData[1],
        answer3: getSocratesData[2],
        answer4: getSocratesData[3],
        answer5: getSocratesData[4],
    });

    const handleUpDownQuestion = (upDown) => {
        if (upDown === 'up') {
            if (currentQuestion === 4) return;
            setCurrentQuestion((prev) => prev + 1);
        }
        if (upDown === 'down') {
            setCurrentQuestion((prev) => prev - 1);
        }
    };
    const handlePatchSocrates = () => {
        let data = { answers: [] };
        for (let i = 1; i <= 5; i++) {
            data.answers.push(answer['answer' + i]);
        }
        setAnswer(data);
        mutate(data);
    };

    return (
        <BackImg>
            <MainQuestion>
                자신에 대해서 <br />
                얼마나 알고 있나요?
            </MainQuestion>
            <MiniQuestion>
                {socratestQuestionList[currentQuestion].question} &#40;
                {currentQuestion + 1}/5&#41;
            </MiniQuestion>
            <ProgressBar currentPageNum={currentQuestion} limit={4} />
            <MainAnswer>
                <textarea
                    name="AboutMeAnswer"
                    placeholder="답변이 어려우면 작성하지 않아도 괜찮아요 &#10;언제든 다시 작성이 가능합니다"
                    onChange={(e) =>
                        setAnswer((prev) => ({
                            ...prev,
                            [`answer${currentQuestion + 1}`]: e.target.value,
                        }))
                    }
                    value={answer[`answer${currentQuestion + 1}`]}
                    rows={6}
                    cols={40}
                />
            </MainAnswer>
            <MQButton>
                {currentQuestion === 0 ? (
                    <div></div>
                ) : (
                    <CustomButton
                        icon={'left'}
                        onClick={() => handleUpDownQuestion('down')}
                    >
                        이전 질문
                    </CustomButton>
                )}
                {currentQuestion === 4 ? (
                    <CustomButton icon={'right'} onClick={handlePatchSocrates}>
                        홈으로
                    </CustomButton>
                ) : (
                    <CustomButton
                        icon={'right'}
                        onClick={() => handleUpDownQuestion('up')}
                    >
                        다음 질문
                    </CustomButton>
                )}
            </MQButton>
        </BackImg>
    );
}
export default Socrates;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    padding: 50% 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40%;
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

const MainAnswer = styled.div`
    textarea {
        font-size: 16px;
        height: 180px;
        resize: none;
        outline: none;
        border-radius: 10px;
        border: none;
        width: 100%;
        background-color: #00000046;
        color: white;
        font-weight: 700;

        padding: 10px;
        ::placeholder {
            color: white;
            font-size: 14px;
            font-weight: 700;
        }
    }
`;

const MQButton = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5% 0;
`;
