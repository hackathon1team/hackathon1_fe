import styled from 'styled-components';
import { CancelIcon } from '../../../../components/icons/icons';
import CustomButton from '../../../../components/customButton/customButton';
import { useState } from 'react';
import EmotionModal from './emotionModal';
import CategoryModal from './categoryModal';
import { useGetToday } from '../../../../hooks/useGetToday';
import { useFindEmotions } from '../../../../hooks/useFindEmotions';
import { usePostSchedule } from '../../../../query/Post/usePostSchedule.js.js';
import TimeModal from './timeModal';

function ScheduleModal({ setIsView, isView, refetch, currentDate }) {
    const today = useGetToday();

    const [addDate, setAddDate] = useState({
        ledgerDate: today,
        emotionCategory: '',
        emotion: '',
        category: '',
        contents: '',
        takedTime: '',
    });
    const { mutate: postSchedule } = usePostSchedule(setIsView, refetch);

    const handleChangeVal = (e, category) => {
        setAddDate((prev) => ({ ...prev, [category]: e.target.value }));
    };
    const handleAddSchedul = () => {
        if (
            addDate.emotionCategory === '' ||
            addDate.emotion === '' ||
            addDate.category === '' ||
            addDate.contents === ''
        )
            return;
        postSchedule(addDate);
    };

    return (
        <Wrapper>
            <Data>
                <div>
                    {currentDate && currentDate.split('-')[1]}월
                    {currentDate && currentDate.split('-')[2]}일 일정 추가
                </div>
                <CancelIcon
                    onClick={() =>
                        setIsView(() => ({
                            firstModal: false,
                            emotionModal: false,
                            categoryModal: false,
                            dateModal: false,
                            timeModal: false,
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
                    isVal={addDate.emotion === ''}
                >
                    {addDate.emotion
                        ? useFindEmotions(addDate.emotion)
                        : '감정을 선택해주세요'}
                </CategoryVal>
            </ContentsList>
            <ContentsList>
                <Category>분류 : </Category>
                <CategoryVal
                    onClick={() =>
                        setIsView((prev) => ({ ...prev, categoryModal: true }))
                    }
                    isVal={addDate.category === ''}
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
                    isVal={addDate.contents === ''}
                />
            </ContentsList>
            <ContentsList>
                <Category>시간 : </Category>
                <CategoryVal
                    onClick={() =>
                        setIsView((prev) => ({ ...prev, timeModal: true }))
                    }
                    isVal={addDate.takedTime === ''}
                >
                    {addDate.takedTime
                        ? addDate.takedTime + '시간'
                        : '시간을 선택해주세요'}
                </CategoryVal>
            </ContentsList>
            <ButtonWrapper>
                <CustomButton
                    value={addDate.takedTime}
                    onClick={handleAddSchedul}
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
            {isView.timeModal && (
                <TimeModal setIsView={setIsView} setAddDate={setAddDate} />
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
    animation: fadeIn 1s forwards;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
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
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
`;
const CategoryVal = styled.div`
    font-size: 18px;
    cursor: pointer;
    color: ${({ isVal }) => (isVal ? '#9397ba' : '#797fab')};
    font-weight: ${({ isVal }) => (isVal ? '' : '600')};
`;
const CategoryValInput = styled.input`
    background-color: transparent;
    border: none;
    color: #797fab;
    font-weight: ${({ isVal }) => (isVal ? '' : '600')};
    :focus {
        outline: none;
    }
    ::placeholder {
        color: #9397ba;
    }

    font-size: 18px;
    width: 80%;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 10px;
`;
