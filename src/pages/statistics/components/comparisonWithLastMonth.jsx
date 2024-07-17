import styled from 'styled-components';
import PercentBar from './percentBar';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import Background from '../../../assets/Img/backgroundImg/logInStatistics.png';
import { BackGroundImg } from '../../../styles/common';
import TitleBox from './titleBox';

function ComparisonWithLastMonth({ data }) {
    let ratio = (
        100 /
        (data.currentHours >= data.previousHours
            ? data.currentHours
            : data.previousHours)
    ).toFixed(2);

    return (
        <BackImg>
            <GlassmorphismModal margin={'100px'}>
                <TitleBox
                    text={'지난 달과 비교하여\n 시간을 한 눈에 확인해 볼까요?'}
                />
                <PercentWrapper>
                    <PercentBar
                        heigth={'bold'}
                        ratio={ratio}
                        category={data.previousCategory}
                        count={data.previousHours}
                    />
                    <PercentBar
                        height={'bold'}
                        ratio={ratio}
                        category={data.currentCategory}
                        count={data.currentHours}
                    />
                </PercentWrapper>
            </GlassmorphismModal>
        </BackImg>
    );
}
export default ComparisonWithLastMonth;
const BackImg = styled.div`
    ${BackGroundImg(Background)}
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const PercentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    & > * {
        margin-top: 80px;
    }
`;
