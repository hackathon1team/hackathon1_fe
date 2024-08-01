import styled from 'styled-components';
import PercentBar from './percentBar';
import GlassmorphismModal from '../../../components/glassmorphismModal/glassmorphismModal';
import { BackGroundImg } from '../../../styles/common';
import TitleBox from './titleBox';
import { ArrowIcon, UpArrowIcon } from '../../../components/icons/icons';
import PrevNoneData from './prevNoneData';
import Cloud1 from '../../../assets/Img/LogInImg/Cloud1.png';

function ComparisonWithLastMonth({ data }) {
    let ratio = (
        100 /
        (data.currentHours >= data.previousHours
            ? data.currentHours
            : data.previousHours)
    ).toFixed(2);

    return (
        <BackImg>
            <UpArrowIcon />
            <GlassmorphismModal height={'70%'}>
                <Cloud1Img src={Cloud1} alt="" />

                <TitleBox
                    text={'지난 달과 비교하여\n 시간을 한 눈에 확인해 볼까요?'}
                />
                {data.previousCategory === '' && data.currentCategory === '' ? (
                    <PrevNoneData />
                ) : (
                    <PercentWrapper>
                        <PercentBar
                            ratio={ratio}
                            heigth={'bold'}
                            category={data.previousCategory}
                            count={data.previousHours}
                            unit={'시간'}
                        />
                        <PercentBar
                            ratio={ratio}
                            heigth={'bold'}
                            category={data.currentCategory}
                            count={data.currentHours}
                            unit={'시간'}
                        />
                    </PercentWrapper>
                )}
            </GlassmorphismModal>
            <ArrowIcon />
        </BackImg>
    );
}
export default ComparisonWithLastMonth;
const BackImg = styled.div`
    ${BackGroundImg()}
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PercentWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    & > * {
        margin-top: 10px;
        height: 100px;
    }
`;
const Cloud1Img = styled.img`
    position: absolute;
    top: -100px;
    left: -10px;
`;
