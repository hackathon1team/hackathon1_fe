import styled from 'styled-components';
import { BackGroundImg } from '../../styles/common';
import ComparisonWithLastMonth from './components/comparisonWithLastMonth';
import Background from '../../assets/Img/backgroundImg/logInStatistics.png';
import TimeSpent from './components/timeSpent';
import EmotionsSummary from './components/emotionsSummary';

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
    };

    return (
        <>
            <TimeSpent />
            <ComparisonWithLastMonth data={testData.comparisonWithLastMonth} />
            <EmotionsSummary data={testData.emotionsSummary} />
        </>
    );
}
export default StatisticsPage;

const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    flex-direction: column;
    align-items: center;
`;
