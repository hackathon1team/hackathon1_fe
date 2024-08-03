import ComparisonWithLastMonth from './components/comparisonWithLastMonth';
import TimeSpent from './components/timeSpent';
import PositiveEmotions from '../statistics/components/positiveEmotions';
import NegativeEmotions from './components/negativeEmotions';
import NeutralEmotions from './components/neutralEmotions';
import EmotionsSummary from './components/emotionsSummary';
import styled from 'styled-components';
import useGetStatisticDate from '../../query/Get/useGetStatisticData';
import { useRef } from 'react';
// import useScrollFullPage from '../../hooks/useScrollFullPage';

function StatisticsPage() {
    const { data: statisticsData } = useGetStatisticDate();
    const {
        timeSpent,
        comparisonWithLastMonth,
        emotionsSummary,
        positiveEmotions,
        neutralEmotions,
        negativeEmotions,
    } = statisticsData;
    // scroll event hook fn
    // useScrollFullPage();
    const scrollRef = useRef([]);

    return (
        <Wrapper>
            <TimeSpent
                data={timeSpent}
                ref={(el) => (scrollRef.current[0] = el)}
                scrollRef={scrollRef}
            />
            <ComparisonWithLastMonth
                data={comparisonWithLastMonth}
                ref={(el) => (scrollRef.current[1] = el)}
            />
            <EmotionsSummary data={emotionsSummary} />
            <PositiveEmotions data={positiveEmotions} />
            <NeutralEmotions data={neutralEmotions} />
            <NegativeEmotions data={negativeEmotions} />
        </Wrapper>
    );
}
export default StatisticsPage;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }
`;
