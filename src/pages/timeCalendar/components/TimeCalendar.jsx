import styled from 'styled-components';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import { useFindEmotions } from '../../../hooks/useFindEmotions';
import { useState } from 'react';
import DetailModal from './modal/detailModal';

const TimeCalendarPage = ({ data, refetch }) => {
    const [isDetailModal, setIsDetailModal] = useState({
        isView: false,
        data: {},
    });

    return (
        <Wrapper>
            <GlassmorphismModal>
                <Header>
                    <Emotion>감정</Emotion>
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
                            <Emotion>{useFindEmotions(el.emotion)}</Emotion>
                            <Case>{el.category}</Case>
                            <Content>{el.contents}</Content>
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
    text-align: center;
    color: white;
    flex-direction: column;
    justify-content: center;
`;
const Contents = styled.div`
    display: flex;
    width: 100%;
    padding: 13px 0;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    & > div {
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
const Emotion = styled.div`
    min-width: 20%;
    max-width: 20%;
    white-space: nowrap;
    padding-bottom: 4px;
    overflow: hidden;
`;
const EmotionEmoji = styled.div``;
