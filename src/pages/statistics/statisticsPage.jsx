import ComparisonWithLastMonth from './components/comparisonWithLastMonth';
import TimeSpent from './components/timeSpent';
import PositiveEmotions from '../statistics/components/positiveEmotions';
import NegativeEmotions from './components/negativeEmotions';
import NeutralEmotions from './components/neutralEmotions';
import EmotionsSummary from './components/emotionsSummary';
import styled from 'styled-components';
// import useScrollFullPage from '../../hooks/useScrollFullPage';

function StatisticsPage() {
    const testData = {
        comparisonWithLastMonth: {
            previousCategory: '알바',
            previousMonth: '7',
            previousHours: '57',
            currentCategory: '공부',
            currentMonth: '8',
            currentHours: '62',
        },
        emotionsSummary: [
            {
                type: '긍정',
                count: '18',
            },
            {
                type: '중립',
                count: '10',
            },
            {
                type: '부정',
                count: '3',
            },
        ],
        positiveEmotions: [
            {
                type: '기쁨',
                count: '7',
            },
            {
                type: '사랑',
                count: '3',
            },
            {
                type: '감사',
                count: '1',
            },
            {
                type: '희망',
                count: '2',
            },
            {
                type: '만족',
                count: '5',
            },
            {
                type: '흥분',
                count: '0',
            },
        ],
        negativeEmotions: [
            {
                type: '슬픔',
                count: '7',
            },
            {
                type: '분노',
                count: '3',
            },
            {
                type: '두려움',
                count: '1',
            },
            {
                type: '혐오',
                count: '2',
            },
            {
                type: '실망',
                count: '5',
            },
            {
                type: '불안',
                count: '0',
            },
            {
                type: '외로움',
                count: '1',
            },
            {
                type: '질투',
                count: '2',
            },
            {
                type: '죄책감',
                count: '5',
            },
            {
                type: '수치심',
                count: '0',
            },
        ],
        neutralEmotions: [
            {
                type: '놀람',
                count: '7',
            },
            {
                type: '무관심',
                count: '3',
            },
            {
                type: '혼란',
                count: '6',
            },
            {
                type: '궁금함',
                count: '7',
            },
            {
                type: '평온',
                count: '3',
            },
            {
                type: '평범함',
                count: '6',
            },
            {
                type: '생각에 잠김',
                count: '6',
            },
        ],
    };

    // scroll event hook fn
    // useScrollFullPage();

    return (
        <Wrapper>
            <TimeSpent />
            <ComparisonWithLastMonth data={testData.comparisonWithLastMonth} />
            <EmotionsSummary data={testData.emotionsSummary} />
            <PositiveEmotions data={testData.positiveEmotions} />
            <NeutralEmotions data={testData.neutralEmotions} />
            <NegativeEmotions data={testData.negativeEmotions} />
        </Wrapper>
    );
}
export default StatisticsPage;

const Wrapper = styled.div`
    /* overflow: hidden; */
    height: 100vh;
    width: 100%;
`;
