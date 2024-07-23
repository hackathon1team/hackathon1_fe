import styled from 'styled-components';
import { CancelIcon } from '../../../components/icons/icons';
import { emotions } from '../../../constants/emotions';
import { useState } from 'react';

function EmotionModal({ setIsView, setAddDate }) {
    const emotionCategory = [
        {
            kor: '긍정적',
            en: 'positiveEmotions',
        },
        {
            kor: '중립',
            en: 'neutralEmotions',
        },
        {
            kor: '부정적',
            en: 'negativeEmotions',
        },
    ];
    const [clickCategory, setClickCategory] = useState({
        kor: '긍정적',
        en: 'positiveEmotions',
    });

    const handleClickEmotion = (e, type, emotions) => {
        setAddDate((prev) => ({ ...prev, emotion: emotions + type }));
        setIsView((prev) => ({ ...prev, emotionModal: false }));
    };

    return (
        <Wrapper>
            <Category>
                <CategoryList>
                    {emotionCategory.map((el, idx) => (
                        <Box
                            key={idx}
                            point={el.kor === clickCategory.kor}
                            onClick={() =>
                                setClickCategory({
                                    kor: el.kor,
                                    en: el.en,
                                })
                            }
                        >
                            {el.kor}
                        </Box>
                    ))}
                </CategoryList>
                <CancelIcon
                    color={'black'}
                    onClick={() =>
                        setIsView((prev) => ({ ...prev, emotionModal: false }))
                    }
                />
            </Category>
            <EmotionList>
                {emotions[clickCategory.en].map((el, idx) => (
                    <Emotion
                        onClick={(e) =>
                            handleClickEmotion(e, el.type, el.emotions)
                        }
                    >
                        {el.emotions}
                        {el.type}
                    </Emotion>
                ))}
            </EmotionList>
        </Wrapper>
    );
}
export default EmotionModal;

const Wrapper = styled.div`
    height: 210px;
    width: 100%;
    overflow-y: auto;
    left: 0;
    background-color: white;
    position: absolute;
    bottom: 0;
    border-radius: 40px 40px 0 0;
    color: #5d659e;
    padding: 20px 30px;
    z-index: 11;
    animation: fadeIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    @keyframes fadeIn {
        0% {
            bottom: -20rem;
            opacity: 0;
        }
        100% {
            bottom: 0;
            opacity: 1;
        }
    }
`;
const Category = styled.div`
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CategoryList = styled.div`
    display: flex;
    align-items: center;
`;
const Box = styled.div`
    margin-right: 10px;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: ${({ point }) => (point ? '#D6CDE4' : '')};
`;
const EmotionList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Emotion = styled.div`
    border: 1px solid #b6bbd3;
    font-size: 16px;
    font-weight: bold;
    padding: 5px 12px;
    border-radius: 15px;
    margin: 5px;
`;
