import ComparisonWithLastMonth from './components/comparisonWithLastMonth';
import TimeSpent from './components/timeSpent';
import PositiveEmotions from '../statistics/components/positiveEmotions';
import NegativeEmotions from './components/negativeEmotions';
import NeutralEmotions from './components/neutralEmotions';
import EmotionsSummary from './components/emotionsSummary';
import styled from 'styled-components';
import useGetStatisticDate from '../../query/Get/useGetStatisticData';
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

    return (
        <Wrapper>
            <TimeSpent data={timeSpent} />
            <ComparisonWithLastMonth data={comparisonWithLastMonth} />
            <EmotionsSummary data={emotionsSummary} />
            <PositiveEmotions data={positiveEmotions} />
            <NeutralEmotions data={neutralEmotions} />
            <NegativeEmotions data={negativeEmotions} />
        </Wrapper>
    );
}
export default StatisticsPage;

const Wrapper = styled.div`
    /* overflow: hidden; */
    height: 100vh;
    width: 100%;
`;
