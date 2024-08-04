import ComparisonWithLastMonth from './components/comparisonWithLastMonth';
import TimeSpent from './components/timeSpent';
import PositiveEmotions from '../statistics/components/positiveEmotions';
import NegativeEmotions from './components/negativeEmotions';
import NeutralEmotions from './components/neutralEmotions';
import EmotionsSummary from './components/emotionsSummary';
import styled from 'styled-components';
import useGetStatisticDate from '../../query/Get/useGetStatisticData';
import useMoveScroll from '../../hooks/useMoveScroll';
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

    const tabsList = {
        0: useMoveScroll(),
        1: useMoveScroll(),
        2: useMoveScroll(),
        3: useMoveScroll(),
        4: useMoveScroll(),
        5: useMoveScroll(),
    };

    return (
        <Wrapper>
            <TimeSpent data={timeSpent} tabsList={tabsList} />
            <ComparisonWithLastMonth
                data={comparisonWithLastMonth}
                tabsList={tabsList}
            />
            <EmotionsSummary data={emotionsSummary} tabsList={tabsList} />
            <PositiveEmotions data={positiveEmotions} tabsList={tabsList} />
            <NeutralEmotions data={neutralEmotions} tabsList={tabsList} />
            <NegativeEmotions data={negativeEmotions} tabsList={tabsList} />
        </Wrapper>
    );
}
export default StatisticsPage;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`;
