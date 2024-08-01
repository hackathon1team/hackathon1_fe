import styled from 'styled-components';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import { useFindEmotions } from '../../../hooks/useFindEmotions';
import { useState } from 'react';
import DetailModal from './modal/detailModal';
import useStrAddDots from '../../../hooks/useStrAddDot';

const TimeCalendarPage = ({ data, refetch }) => {
    const [isDetailModal, setIsDetailModal] = useState({
        isView: false,
        data: {},
    });

    return (
        <Wrapper>
            <GlassmorphismModal>
                <Header>
                    <EmotionTitle>감정</EmotionTitle>
                    <Case>분류</Case>
                    <Content>내용</Content>
                    <Hour>시간</Hour>
                </Header>
                <AllContents>
                    {data.map((el, idx) => (
                        <Contents
                            key={idx}
                            onClick={() =>
                                setIsDetailModal({ isView: true, data: el })
                            }
                        >
                            <Emotion>
                                {useStrAddDots(useFindEmotions(el.emotion), 5)}
                            </Emotion>
                            <Case>{el.category}</Case>
                            <Content>{useStrAddDots(el.contents, 15)}</Content>
                            <Hour>{el.takedTime}h</Hour>
                        </Contents>
                    ))}
                </AllContents>
            </GlassmorphismModal>
            {isDetailModal.isView && (
                <DetailModal
                    setIsDetailModal={setIsDetailModal}
                    isDetailModal={isDetailModal}
                    refetch={refetch}
                />
            )}
        </Wrapper>
    );
};

export default TimeCalendarPage;
const Wrapper = styled.div`
    padding-bottom: 40px;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    color: #f8f9fe;
    font-size: 16px;
    font-weight: 700;
    width: 95%;
    margin-bottom: 10px;
    text-align: center;
`;

const Case = styled.div`
    min-width: 25%;
    max-width: 25%;
    white-space: nowrap;
`;
const Content = styled.div`
    width: 45%;
    overflow: hidden;
`;
const Hour = styled.div`
    width: 10%;
    overflow: hidden;
`;

const AllContents = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    color: white;
    flex-direction: column;
`;
const Contents = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    overflow: hidden;
    color: white;
    & > div {
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > div:first-child {
        display: flex;
        align-items: center;
        justify-content: start;
    }
    cursor: pointer;
`;
const EmotionTitle = styled.div`
    min-width: 15%;
    max-width: 15%;
    text-align: center;
`;
const Emotion = styled.div`
    min-width: 15%;
    max-width: 15%;
    white-space: nowrap;
    padding-top: 1px;
    overflow: hidden;
    text-align: start;
`;
const EmotionEmoji = styled.div``;
