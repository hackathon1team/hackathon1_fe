import styled from 'styled-components';
import { CancelIcon } from '../../../components/icons/icons';
import CustomButton from '../../../components/customButton/customButton';
import { useState } from 'react';
import EmotionModal from './emotionModal';
import CategoryModal from './categoryModal';

function ScheduleModal({ setIsView, isView }) {
    const [addDate, setAddDate] = useState({
        emotion: '',
        category: '',
        contents: '',
        takedTime: '',
    });
    const handleChangeVal = (e, category) => {
        setAddDate((prev) => ({ ...prev, [category]: e.target.value }));
    };

    return (
        <Wrapper>
            <Data>
                <div>7월 12일 일정 추가</div>
                <CancelIcon
                    onClick={() =>
                        setIsView(() => ({
                            firstModal: false,
                            emotionModal: false,
                            categoryModal: false,
                        }))
                    }
                />
            </Data>
            <ContentsList>
                <Category>감정 : </Category>
                <CategoryVal
                    onClick={() =>
                        setIsView((prev) => ({ ...prev, emotionModal: true }))
                    }
                    isVal={isView.emotion === ''}
                >
                    {addDate.emotion ? addDate.emotion : '감정을 선택해주세요'}
                </CategoryVal>
            </ContentsList>
            <ContentsList>
                <Category>분류 : </Category>
                <CategoryVal
                    onClick={() =>
                        setIsView((prev) => ({ ...prev, categoryModal: true }))
                    }
                    isVal={isView.category === ''}
                >
                    {addDate.category
                        ? addDate.category
                        : '분류를 선택해주세요'}
                </CategoryVal>
            </ContentsList>
            <ContentsList>
                <Category>내용 : </Category>
                <CategoryValInput
                    placeholder="내용을 작성해주세요"
                    value={addDate.contents}
                    onChange={(e) => handleChangeVal(e, 'contents')}
                />
            </ContentsList>
            <ContentsList>
                <Category>시간 : </Category>
                <CategoryValInput
                    placeholder="소요시간을 작성해주세요 (시간당)"
                    type="number"
                    onChange={(e) => handleChangeVal(e, 'takedTime')}
                />
            </ContentsList>
            <ButtonWrapper>
                <CustomButton
                    value={addDate.takedTime}
                    onClick={() => alert('서비스 준비중입니다:)')}
                    disabled
                >
                    추가
                </CustomButton>
            </ButtonWrapper>
            {isView.emotionModal && (
                <EmotionModal setIsView={setIsView} setAddDate={setAddDate} />
            )}
            {isView.categoryModal && (
                <CategoryModal setIsView={setIsView} setAddDate={setAddDate} />
            )}
        </Wrapper>
    );
}
export default ScheduleModal;

const Wrapper = styled.div`
    height: 350px;
    width: 100%;
    left: 0;
    background-color: #cdcbe2;
    position: absolute;
    bottom: 0;
    border-radius: 40px 40px 0 0;
    color: #5d659e;
    padding: 40px 30px;
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
const Data = styled.div`
    font-size: 21px;
    font-weight: 700px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    & > div {
        font-weight: 700;
    }
`;
const ContentsList = styled.div`
    display: flex;
    padding: 11px 0;
    align-items: center;
`;
const Category = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
`;
const CategoryVal = styled.div`
    font-size: 18px;
    cursor: pointer;
    color: #797fab;
    font-weight: ${({ isVal }) => (isVal ? 'bold' : '')};
`;
const CategoryValInput = styled.input`
    background-color: transparent;
    border: none;
    color: #5d659e;
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #797fab;
    }

    font-size: 16px;
    width: 80%;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 10px;
`;
